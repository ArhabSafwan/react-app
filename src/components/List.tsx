import React from "react";
const List = (props) => {
  const itemList = props.items;
  const category = props.category;

  const listItems = itemList.map(
    (item) => (
      <li key={item.id}>
        {item.name} <b>{item.calories}</b>
      </li>
    )
  );
  return (
    <div>
      <h2>{category}</h2>
      <ol>{listItems}</ol>
    </div>
  );
};

export default List;






//   fruits.sort((a,b) => a.name.localeCompare(b.name)); //alphabetic
//   fruits.sort((a, b) => b.name.localeCompare(a.name)); // reverse alphabetic

// const highcCalFruits = fruits.filter(fruit=> fruit.calories > 100); finding high cal fruit
// const lowcCalFruits = fruits.filter(fruit => fruit.calories<100);  low cal fruit
