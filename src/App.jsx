// const GroceryList = (props) => (
//   <ul>
//     <li>{props.items[0]}</li>
//     <li>{props.items[1]}</li>
//     <li>{props.items[2]}</li>
//   </ul>
// );

// const GroceryListItem = () => (
//   <div>
//     <h1>My Grocery List</h1>
//     <GroceryList items={["Milk", "Eggs", "Bread"]} />
//   </div>
// );

import React, { Component } from "react";

const GroceryList = (props) => (
  <ul>
    <li>{props.items[0]}</li>
    <li>{props.items[1]}</li>
    <li>{props.items[2]}</li>
  </ul>
);

class GroceryListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: [false, false, false], // Initial state for each <li> element
    };
  }

  handleMouseEnter = (index) => {
    // Set the corresponding <li> element as hovered when the mouse enters
    this.setState((prevState) => {
      const isHovered = [...prevState.isHovered];
      isHovered[index] = true;
      return { isHovered };
    });
  };

  handleMouseLeave = (index) => {
    // Set the corresponding <li> element as not hovered when the mouse leaves
    this.setState((prevState) => {
      const isHovered = [...prevState.isHovered];
      isHovered[index] = false;
      return { isHovered };
    });
  };

  render() {
    const items = ["Milk", "Eggs", "Bread"];

    return (
      <div>
        <h1>My Grocery List</h1>
        <ul>
          {items.map((item, index) => (
            <li
              key={index}
              onMouseEnter={() => this.handleMouseEnter(index)}
              onMouseLeave={() => this.handleMouseLeave(index)}
              style={{ fontWeight: this.state.isHovered[index] ? "bold" : "normal" }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default GroceryListItem;
