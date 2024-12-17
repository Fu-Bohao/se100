import { useContext, useEffect, useState } from "react";
import CurrencyContext from "./contexts/CurrencyContext";

function CurrencyConverter() {
    const [amount, setAmount] = useState("");
    const [output, setOutput] = useState(0);
    const { currencyFrom, currencyTo } = useContext(CurrencyContext);

    function handleChange(event) {
        setAmount(event.target.value);
    }

    useEffect(() => {
        fetch(
            "https://v6.exchangerate-api.com/v6/5909da65d56037632ad205d8/pair/" +
            currencyFrom +
            "/" +
            currencyTo +
            "/" +
            amount
        )
            .then((res) => res.json())
            .then((data) => setOutput(data["conversion_result"]));
    }, [amount, currencyFrom, currencyTo]);

    return (
        <div className="flex-container">
            <input
                value={amount}
                placeholder="Enter amount"
                className="converter-input"
                onChange={handleChange}
            />

            <p>{currencyFrom}</p>
            <p>=</p>
            <p className="converter-result">{amount === "" ? 0 : output}</p>
            <p>{currencyTo} </p>
        </div>
    );
}

export default CurrencyConverter;