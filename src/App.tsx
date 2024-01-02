// import { useState } from "react";
import ExpandableText from "./components/ExpandableText";

function App() {
  // const [cart, setCart] = useState({
  //   discount: 0.1,
  //   items: [
  //     { id: 1, title: "Product 1", quantity: 1 },
  //     { id: 2, title: "Product 2", quantity: 1 },
  //   ],
  // });
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

  // const handleClick = () => {
  //   setCart({
  //     ...cart,
  //     items: cart.items.map((item) =>
  //       item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
  //     ),
  //   });
  // Adding a toppings to the array
  // setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
  // setGame({ ...game, player: { ...game.player, name: "Hassan" } });
  // };

  return (
    <div>
      <ExpandableText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
        dolorem, illum optio repellendus dolore voluptates tenetur quasi odio
        quos labore provident deleniti molestiae ut alias est magnam quam sint
        esse? Dolorum dolor accusamus nisi sunt blanditiis, minima culpa ab ea
        facilis voluptas corrupti cupiditate exercitationem laboriosam animi
        officia! Minima esse odit quae ipsa est, nobis mollitia eaque molestias.
        Dolores error sit, mollitia ipsa veritatis eaque labore velit tempore ex
        cumque similique eius facere et dolorum voluptate odio dolore magnam ab
        maxime tenetur consectetur vero expedita ullam deserunt? Quisquam illo
        velit, alias, natus, quas necessitatibus iusto eius itaque unde
        distinctio sapiente!
      </ExpandableText>
      {/* {game.player.name} */}
      {/* <button onClick={handleClick}>Update</button> */}
    </div>
  );
}

export default App;
