import React from "react";

const TodoForm = props => {
  return (
    <div className="todoForm">
      <form onSubmit={props.addTask}>
        <input
          type="text"
          name="inputText"
          placeholder="add new task"
          value={props.inputText}
          onChange={props.handleChange}
        />

        <button type="submit">Add a Task</button>
        <button onClick={props.clearCompleted}>Clear Completed Tasks</button>
      </form>
    </div>
  );
};

export default TodoForm;
