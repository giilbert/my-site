import { createContext } from "react";

export const PreviousPath = createContext<{
  previousPath: string;
  currentPath: string;
} | null>(null);
