import React, { createContext, useContext, useState, ReactNode } from "react";

interface GlobalContextType {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

interface Props {
  children: ReactNode;
}

export const GlobalProvider: React.FC<Props> = ({ children }) => {
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <GlobalContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook for using the global context
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};
