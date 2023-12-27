import ListGroup from "./components/ListGroup";

import { useState } from "react";
import Alert from "./components/Alert";

import Button from "./components/Button";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>Show Alert</Button>

      <div className="mb-5">
        <h2>Second section</h2>
      </div>

      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
