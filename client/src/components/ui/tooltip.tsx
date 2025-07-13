import { createContext, useContext, ReactNode } from "react";

interface TooltipContextType {
  // Add tooltip context properties if needed
}

const TooltipContext = createContext<TooltipContextType | undefined>(undefined);

export function TooltipProvider({ children }: { children: ReactNode }) {
  return (
    <TooltipContext.Provider value={{}}>
      {children}
    </TooltipContext.Provider>
  );
}

export function useTooltip() {
  const context = useContext(TooltipContext);
  if (context === undefined) {
    throw new Error("useTooltip must be used within a TooltipProvider");
  }
  return context;
}