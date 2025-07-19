import Alert from "./components/Alert";
import { Buttons } from "./components/Buttons";
import { useState } from "react";
import Student from "./components/Student";
import UserGreeting from "./components/UserGreeting";
import List from "./components/List";
//props: read only properties that can be shared from parent component 
// to child component
function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <div>
      {/* <UserGreeting isUserLogged={false} name="Arhab"/> */}
      <List/>
    </div>
  );
}
export default App;
