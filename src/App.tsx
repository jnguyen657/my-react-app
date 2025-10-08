import { useState } from "react";
import FruitList from "./components/FruitList";

function App() {
  const [fruits, setFruits] = useState(["Apple", "Banana", "Cherry"]);

  function addFruit() {
    setFruits([...fruits, "Mango"]);
  }

  return (
    <div>
      <h1>My Fruit App</h1>
      <FruitList fruits={fruits} onAddFruit={addFruit} />
    </div>
  );
}

export default App;
