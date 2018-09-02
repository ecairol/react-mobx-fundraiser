import React, { Component } from "react";
import { observer } from "mobx-react";

const Todo = observer(({ todo }) => (
  <li className="todo">
    <label>
      <input
        type="checkbox"
        checked={todo.finished}
        onClick={() => (todo.finished = !todo.finished)}
      />
      {todo.title}
    </label>
  </li>
));

export default Todo;