import Alert from "./components/Alert";
import { Buttons } from "./components/Buttons";
import {useState} from "react";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <div>
      {alertVisible && <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>}
      <Buttons color="secondary" onclick={() => setAlertVisible(true)}>Click Me</Buttons>
    </div>
  );
}
export default App;
