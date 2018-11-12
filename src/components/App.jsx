import React, { Component } from 'react';
import { firebaseApp } from '../firebase';

class App extends Component{
    constructor(props){
        super(props);

        this.handleSignOut = this.handleSignOut.bind(this);

    }

    handleSignOut(){
        firebaseApp.auth().signOut();
    }

    render(){
        return (
            <div className="container">
                <h1>App</h1>
                <button
                    className="btn btn-danger"
                    onClick={this.handleSignOut}
                >
                    Sign Out
                </button>
            </div>
        )
    }
}

export default App