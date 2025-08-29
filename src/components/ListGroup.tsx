import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: ListGroupProps) {
  // state Hook for the selected index
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // event handler
  const handleClick = (index: number) => {
    console.log("You clicked:", items[index]);
    setSelectedIndex(index); // update state
  };

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => handleClick(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
