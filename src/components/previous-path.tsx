import { createContext } from "react";

export const PreviousPath = createContext<{
  previousPath: string;
} | null>(null);
