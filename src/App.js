import React from "react";
import "./App.css";

function App() {
  const products = [
    {
      name: "Notebook",
      propriedades: ["16gb ram", "512gb"],
    },
    {
      name: "smartphone",
      propriedades: ["2gb ram", "128gb"],
    },
  ];

  return (
    <div className="App">
      <h1>Products</h1>
      <p>
        {products.map((val, i) => (
          <div key={i}>
            <p>{val.name}</p>
            <ul>
              <li>{val.propriedades[0]}</li>
              <li>{val.propriedades[1]}</li>
            </ul>
          </div>
        ))}
      </p>
    </div>
  );
}

export default App;
