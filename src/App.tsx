import { useState } from "react";

function App() {
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  const handleClick = () => {
    // const newDrink = {
    //   ...drink,
    //   price: 6,
    // };
    setDrink({ ...drink, price: 6 }); // instead of creating new variable we can simplify it here
  };

  return (
    <div>
      {drink.price}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
