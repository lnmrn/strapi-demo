import { createContext, useContext, useState } from "react";

const AppContext = createContext();

function GlobalContext({ children }) {
  const [pageId, setPageId] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <AppContext.Provider
      value={{ isSidebarOpen, setIsSidebarOpen, pageId, setPageId }}
    >
      {children}
    </AppContext.Provider>
  );
}

function useGlobalContext() {
  const contextVal = useContext(AppContext);
  if (contextVal === undefined) {
    throw new Error("GlobalContext was used outside bounds.");
  }
  return contextVal;
}

export { GlobalContext, useGlobalContext };
