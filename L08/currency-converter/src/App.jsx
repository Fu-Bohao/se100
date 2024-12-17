import './App.css';
import CurrencyContext from './contexts/CurrencyContext';
import CurrencyDropdown from "./CurrencyDropdown";
import { useState } from "react";

function App() {
  const [currencyFrom, setCurrencyFrom] = useState("AED");
  const [currencyTo, setCurrencyTo] = useState("AFN");

  return (
    <div>
      <CurrencyContext.Provider value={{
        currencyFrom,
        setCurrencyFrom,
        currencyTo,
        setCurrencyTo
      }}>

        <h1>Currency Converter</h1>
        <CurrencyDropdown />
      </CurrencyContext.Provider>
    </div>
  );
}

export default App;
