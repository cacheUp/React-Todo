import React from "react";
import TodoList from "../src/components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./App.css";

const todoData = [
  {
    task: "",
    completed: true,
    id: Date.now(),
    textDecoration: "none"
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: todoData,
      inputText: ""
    };
  }

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.filter(task => task.completed === false)
    });
  };

  lineThrough = id => {
    console.log("function invoked!");
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === id) {
          return {
            ...task,
            completed: task.completed === false ? true : false
          };
        } else {
          return task;
        }
      })
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addTask = e => {
    e.preventDefault();
    this.setState({
      tasks: [
        ...this.state.tasks,
        { task: this.state.inputText, completed: false, id: Date.now() }
      ],
      inputText: ""
    });
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  render() {
    return (
      <div className="App">
        <TodoList tasks={this.state.tasks} lineThrough={this.lineThrough} />
        <TodoForm
          clearCompleted={this.clearCompleted}
          addTask={this.addTask}
          inputText={this.state.inputText}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
