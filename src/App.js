import "./App.css";
import Card from "./Components/Card";
import JSONData from "./JSONFolder/ImageDataset.json";

import { useState } from "react";
function App() {
  const [label, setLabel] = useState("");
  const [customerName, setcustomerName] = useState("");
  const [cardNumber, setcardNumber] = useState("");
  const [expiryDate, setexpiryDate] = useState("");

  // const [label, setLabel] = useState("echo");
  // const [customerName, setcustomerName] = useState("swami nawale");
  // const [cardNumber, setcardNumber] = useState("1233 4566 7899 0000");
  // const [expiryDate, setexpiryDate] = useState("04/24");

  return (
    <div className="App">
      <h1>🌈CC Customizer </h1>
      <p>Start filling details and see the magic💫</p>
      <div className="userInputs">
        <input
          maxLength="20"
          type="text"
          placeholder="Label"
          onChange={(e) => {
            setLabel(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Customer Name"
          onChange={(e) => {
            setcustomerName(e.target.value);
          }}
        />
        <input
          type="text"
          maxLength="19"
          placeholder="0000 0000 0000 0000"
          onChange={(e) => {
            setcardNumber(e.target.value);
          }}
          onInput={(e) => {
            e.target.value = e.target.value
              .replace(/[^\dA-Z]/g, "")
              .replace(/(.{4})/g, "$1 ")
              .trim();
          }}
        />
        <input
          maxLength="5"
          type="text"
          placeholder="MM/YY"
          onChange={(e) => {
            setexpiryDate(e.target.value);
          }}
          onInput={(e) => {
            e.target.value = e.target.value
              .replace(/[^\dA-Z]/g, "")
              .replace(/(.{2})/, "$1/")
              .trim();
          }}
        />
      </div>
      <div className="cardGallery">
        {JSONData.map((key) => {
          return (
            <div>
              <Card
                label={label}
                customerName={customerName}
                cardNumber={cardNumber}
                expiryDate={expiryDate}
                backgroundImage={key.img}
              />
              ;
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
