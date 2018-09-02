import React from 'react';
import TodoList from "./components/todo-list";
import TodoListModel from "./models/todo-list";
import TodoModel from "./models/todo";

const SampleTodo = () => {
    const store = new TodoListModel();
    return (
        <div className="page page-todo">
            <h1>Sample Todo List</h1>
            <TodoList store={store} />
        </div>
    );
}
export default SampleTodo;