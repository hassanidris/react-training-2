import { useState } from "react";

function App() {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });
  // const [pizza, setPizza] = useState({
  //   name: "Spaicy Pepperoni",
  //   toppings: ["Mushroom"],
  // });
  // const [game, setGame] = useState({
  //   id: 1,
  //   player: {
  //     name: "John",
  //   },
  // });

  const handleClick = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
    // Adding a toppings to the array
    // setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
    // setGame({ ...game, player: { ...game.player, name: "Hassan" } });
  };

  return (
    <div>
      {/* {game.player.name} */}
      <button onClick={handleClick}>Update</button>
    </div>
  );
}

export default App;
