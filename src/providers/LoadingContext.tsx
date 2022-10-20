import React, { createContext, useState } from "react";

interface ILoadingContext {
  isLoaded: boolean;
  setIsLoaded: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ILoadingProviderProps {
  children: React.ReactNode;
}

export const LoadingContext = createContext<ILoadingContext>(
  {} as ILoadingContext
);

export const LoadingProvider = ({ children }: ILoadingProviderProps) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  return (
    <LoadingContext.Provider value={{ isLoaded, setIsLoaded }}>
      {children}
    </LoadingContext.Provider>
  );
};
