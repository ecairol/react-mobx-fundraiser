import React from 'react';
import TodoList from "./TodoList";
import TodoListModel from "./TodoList/model";

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