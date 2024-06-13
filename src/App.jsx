/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.inputField = "";
    this.state = {
      todoList: [
        "Go to gym.",
        "Complete the project.",
        "Go shopping.",
        "Learn driving",
      ],
    };
  }
  render() {
    console.log(this.inputField);
    return (
      <div>
        <h1>Let's plan your to-do..</h1>
        <section>
          <input
            placeholder="Enter your task"
            onChange={(event) => {
              console.log(event.target.value);
              this.inputField = event.target.value;
            }}
          />
          <button
            className="btn"
            onClick={() => {
              this.setState({
                todoList: [...this.state.todoList, this.inputField],
              });
            }}
          >
            Add
          </button>
        </section>

        <section>
          <ul>
            {this.state.todoList.map((list, index) => (
              <li key={index}>
                {list}
                <button
                  className="btn"
                  onClick={() => {
                    console.log("Delete this item", index);
                    const newArray = this.state.todoList.filter(
                      (filterItem, filterIndex) => {
                        return filterIndex !== index;
                      }
                    );
                    this.setState({
                      todoList: newArray,
                    });
                  }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </section>
      </div>
    );
  }
}
export default App;
