import React from 'react';
import TodoList from "../../components/TodoList";
import TodoListModel from "../../models/TodoListModel";
import TodoModel from "../../models/TodoModel";

const Home = () => {
    const store = new TodoListModel();
    return (
        <div className="page page-about">
            <h1>Welcome to CryptoFund</h1>
            <TodoList store={store} />
        </div>
    );
}
export default Home;