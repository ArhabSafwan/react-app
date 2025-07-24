import Alert from "./components/Alert";
import { Buttons } from "./components/Buttons";
import { useState } from "react";
import Student from "./components/Student";
import UserGreeting from "./components/UserGreeting";
import List from "./components/List";
//props: read only properties that can be shared from parent component
// to child component
function App() {
  const fruits = [
    { id: 1, name: "orange", calories: 233 },
    { id: 2, name: "banana", calories: 45 },
    { id: 3, name: "apple", calories: 65 },
    { id: 4, name: "grapes", calories: 543 },
    { id: 5, name: "berries", calories: 87 },
  ];
  const vegetables = [
    { id: 1, name: "carrot", calories: 41 },
    { id: 2, name: "broccoli", calories: 55 },
    { id: 3, name: "spinach", calories: 23 },
    { id: 4, name: "peas", calories: 81 },
    { id: 5, name: "kale", calories: 49 },
  ];
  return (
    <div>
      <List items={fruits} category="fruits" />
      <List items={vegetables} category="vegetables" />
    </div>
  );
}
export default App;
