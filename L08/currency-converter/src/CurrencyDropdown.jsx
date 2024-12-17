import { useContext, useEffect } from "react";
import "./CurrencyStyling.css";
import { useState } from "react";
import CurrencyConverter from "./CurrencyConverter";
import CurrencyContext from "./contexts/CurrencyContext";

function CurrencyDropdown() {
    const [currencyList, setCurrencyList] = useState([]);
    const { currencyFrom, currencyTo, setCurrencyFrom, setCurrencyTo } =
        useContext(CurrencyContext);

    useEffect(() => {
        fetch("https://v6.exchangerate-api.com/v6/5909da65d56037632ad205d8/codes")
            .then((res) => res.json())
            .then((data) => setCurrencyList(data["supported_codes"]));
    }, []);

    return (
        <div>
            <div className="flex-container">
                <p>I want to convert</p>
                <select
                    name="currency"
                    id="currencySelect"
                    value={currencyFrom}
                    onChange={(event) => {
                        setCurrencyFrom(event.target.value);
                    }}
                >
                    {currencyList.map((currencyData) => (
                        <option value={currencyData[0]} > {currencyData[1]}</option>
                    ))}
                </select>
                <p>to</p>
                <select
                    name="currency"
                    id="currencySelect"
                    value={currencyTo}
                    onChange={(event) => {
                        setCurrencyTo(event.target.value)
                    }}
                >
                    {currencyList.map((currencyData) => (
                        <option value={currencyData[0]} > {currencyData[1]}</option>
                    ))}
                </select>
            </div>
            <CurrencyConverter currencyFrom={currencyFrom} currencyTo={currencyTo} />
        </div>
    );
}

export default CurrencyDropdown;