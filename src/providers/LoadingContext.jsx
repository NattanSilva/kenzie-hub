import { createContext, useState } from "react";

export const LoadingContext = createContext({});

export const LoadingProvider = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <LoadingContext.Provider value={{ isLoaded, setIsLoaded }}>
      {children}
    </LoadingContext.Provider>
  );
};
