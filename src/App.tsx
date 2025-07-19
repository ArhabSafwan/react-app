import Alert from "./components/Alert";
import { Buttons } from "./components/Buttons";
import {useState} from "react";
import Student from "./components/Student";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <div>
      <Student name="Spongepop" age="30" isStudent={true} />
      <Student name="Patrick" age="30" isStudent={false} />
      <Student name="Squidward" age="30" isStudent={true} />
      <Student name="Mr Krab" age="30" isStudent={true} />
      <Student name="Sandy" age="30" isStudent={true} />
      <Student/>
    </div>
  );
}
export default App;
