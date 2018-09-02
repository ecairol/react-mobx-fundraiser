import React from 'react';
import ProjectList from "./ProjectList";
import ProjectListModel from "./ProjectList/model";

const Home = () => {
    const store = new ProjectListModel();
    return (
        <div className="page page-about">
            <h1>Welcome to CryptoFund</h1>
            <ProjectList store={store}></ProjectList>
        </div>
    );
}
export default Home;