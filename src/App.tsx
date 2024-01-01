import { useState } from "react";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "Hassan" } });
  };

  return (
    <div>
      {game.player.name}
      <button onClick={handleClick}>Update</button>
    </div>
  );
}

export default App;
