import { createContext, useState, useEffect } from "react";

const LogementsContext = createContext();

export function LogementsProvider({ children }) {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    fetch("/P5-OC-LD-Web-App-Location-Immo-Kasa/logements.json")
      .then((response) => response.json())
      .then((data) => setLogements(data));
  }, []);

  return (
    <LogementsContext.Provider value={{ logements }}>
      {children}
    </LogementsContext.Provider>
  );
}

export { LogementsContext };
