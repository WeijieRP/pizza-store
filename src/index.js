import React from "react";
import { createRoot } from "react-dom/client";  
import Spinaci from "./assert/pizzas/spinaci.jpg";

function App() {
  return (
    <>
      <Header />
      <Pizza />
      <Pizza />
    </>
  );
}

function Header() {
  return (
    <div>
      <h1>Weijie’s Pizza Co.</h1>
    </div>
  );
}

function Pizza() {
  return (
    <div>
      <img src={Spinaci} alt="Pizza Spinaci" width="200" />
      <p><strong>Name:</strong> Pizza Spinaci</p>
      <p><strong>Ingredients:</strong> Tomato, Mozzarella, Spinach, and Ricotta Cheese</p>
      <p><strong>Price:</strong> $10</p>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
