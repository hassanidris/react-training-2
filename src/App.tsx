// import ListGroup from "./components/ListGroup";

// import { BsFillCalendarFill } from "react-icons/bs";

// import { useState } from "react";
// import Alert from "./components/Alert";

// import Button from "./components/Button";
import Like from "./components/Like";

function App() {
  // let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  // const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      <Like onClick={() => console.log("clicked")} />
      {/* <Button onClick={() => console.log("clicked")}>My button</Button> */}
      {/* <BsFillCalendarFill color="red" size="40" /> */}
      {/* {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>Show Alert</Button>

      <div className="mb-5">
        <h2>Second section</h2>
      </div> */}

      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}
    </div>
  );
}

export default App;
