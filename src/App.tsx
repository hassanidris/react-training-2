import { useState } from "react";

function App() {
  const [tags, setTags] = useState(["happy", "cheerful"]);

  const handleClick = () => {
    // Add a new tag to the list of tags.
    setTags([...tags, "sad"]);
    // console.log(setTags);

    // Remove
    setTags(tags.filter((tag) => tag !== "happy"));

    // Update
    setTags(tags.map((tag) => (tag === "cheerful" ? "joyful" : tag)));
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
