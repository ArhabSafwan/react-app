import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading?: string;
}
function ListGroup({ items, heading }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1); // Initialize selectedIndex to -1

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={`list-group-item ${
              selectedIndex === index ? "active" : ""
            }`}
            key={item}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
