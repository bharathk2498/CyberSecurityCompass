import { useEffect, useRef } from "react";

export default function MatrixBackground() {
  const matrixRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()';
    
    function createMatrixChar() {
      if (!matrixRef.current) return;
      
      const char = document.createElement('div');
      char.className = 'matrix-char';
      char.textContent = chars[Math.floor(Math.random() * chars.length)];
      char.style.left = Math.random() * 100 + '%';
      char.style.animationDuration = (Math.random() * 3 + 2) + 's';
      char.style.opacity = (Math.random() * 0.5 + 0.1).toString();
      
      matrixRef.current.appendChild(char);
      
      setTimeout(() => {
        if (char.parentNode) {
          char.parentNode.removeChild(char);
        }
      }, 5000);
    }
    
    const interval = setInterval(createMatrixChar, 200);
    
    return () => clearInterval(interval);
  }, []);

  return <div ref={matrixRef} className="matrix-bg" />;
}
