import { useState } from "react";

function App() {
  const [bugs, setBugs] = useState([
    { id: 1, name: "Bug 1", fixed: false },
    { id: 2, name: "Bug 2", fixed: false },
  ]);

  const handleClick = () => {
    setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
  };

  return (
    <div>
      {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.name} {bug.fixed ? "Fixed" : "New"}
        </p>
      ))}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
