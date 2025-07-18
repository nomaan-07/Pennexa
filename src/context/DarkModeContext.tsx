import { createContext, ReactNode, useEffect, useState } from "react";

interface DarkModeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(
  undefined,
);

interface DarkModeProviderProps {
  children: ReactNode;
}
function DarkModeProvider({ children }: DarkModeProviderProps) {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("isDarkMode") === "true",
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("isDarkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("isDarkMode", "false");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode((darkMode) => !darkMode);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export { DarkModeProvider, DarkModeContext };
