import { createContext, useContext, useState } from "react";

type Mode = "light" | "dark";
type ProviderProps = { children: React.ReactNode };

type ModeProps = {
  mode: Mode;
  setMode: React.Dispatch<React.SetStateAction<Mode>>;
};

const ModeContext = createContext<ModeProps | null>(null);

export function ModeProvider({ children }: ProviderProps) {
  const [mode, setMode] = useState<Mode>("dark");
  const value = { mode, setMode };

  return <ModeContext.Provider value={value}>{children}</ModeContext.Provider>;
}

export function useMode() {
  const context = useContext(ModeContext);
  if (context === undefined) {
    throw new Error("useMode should be used within ModeProvider");
  }

  return context;
}
