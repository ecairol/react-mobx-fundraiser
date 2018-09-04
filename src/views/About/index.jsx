import React from 'react';
const About = () => {
    return (
        <div className="page page-about">
            <h1 className="page-title">About</h1>
            <p>This is a first attempt of creating a React app using MobX as the state manager.</p>
            <p>
                To scaffold the initial app <code>create-react-app</code> was used, and some configuration was made to support SASS as well as ES6 observers (required for MobX).
            </p>
            <p><small>@ecairol 2018</small></p>
        </div>
    );
}
export default About;