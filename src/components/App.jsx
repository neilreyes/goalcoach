import React, { Component } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

class App extends Component{
    render(){
        return (
            <div>
                <h1>App</h1>
                <SignIn />
                <SignUp />
            </div>
        )
    }
}

export default App