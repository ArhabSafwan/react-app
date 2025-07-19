import React from "react";

const List = () => {
  const fruits = [
    { id: 1, name: "orange", calories: 233 },
    { id: 2, name: "banana", calories: 45 },
    { id: 3, name: "apple", calories: 65 },
    { id: 4, name: "grapes", calories: 543 },
    { id: 5, name: "berries", calories: 87 },
  ];
  //   fruits.sort((a,b) => a.name.localeCompare(b.name)); //alphabetic
//   fruits.sort((a, b) => b.name.localeCompare(a.name)); // reverse alphabetic

// const highcCalFruits = fruits.filter(fruit=> fruit.calories > 100); finding high cal fruit
// const lowcCalFruits = fruits.filter(fruit => fruit.calories<100);  low cal fruit

  const listItems = fruits.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name} <b>{fruit.calories}</b>
    </li>
  ));
  return (
    <div>
      <ol>{listItems}</ol>
    </div>
  );
};

export default List;
