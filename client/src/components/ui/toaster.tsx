import { useState, useEffect } from "react";

interface Toast {
  id: string;
  message: string;
  type: "success" | "error" | "warning" | "info";
}

let toasts: Toast[] = [];
let listeners: Array<(toasts: Toast[]) => void> = [];

export function useToast() {
  const [toastState, setToastState] = useState<Toast[]>([]);

  useEffect(() => {
    const listener = (newToasts: Toast[]) => {
      setToastState([...newToasts]);
    };
    
    listeners.push(listener);
    
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  }, []);

  const toast = (message: string, type: Toast["type"] = "info") => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast: Toast = { id, message, type };
    
    toasts.push(newToast);
    listeners.forEach(listener => listener(toasts));
    
    // Auto remove after 5 seconds
    setTimeout(() => {
      toasts = toasts.filter(t => t.id !== id);
      listeners.forEach(listener => listener(toasts));
    }, 5000);
  };

  return { toast, toasts: toastState };
}

export function Toaster() {
  const { toasts } = useToast();

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`
            p-4 rounded-lg shadow-lg text-white font-medium max-w-sm
            ${toast.type === "success" ? "bg-green-500" : ""}
            ${toast.type === "error" ? "bg-red-500" : ""}
            ${toast.type === "warning" ? "bg-yellow-500" : ""}
            ${toast.type === "info" ? "bg-blue-500" : ""}
          `}
        >
          {toast.message}
        </div>
      ))}
    </div>
  );
}