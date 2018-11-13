import React, { Component } from 'react';
import { connect } from 'react-redux';
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
                    className="btn"
                    onClick={this.handleSignOut}
                >
                    Sign Out
                </button>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log('state', state);

    return { state };
}

export default connect(mapStateToProps, null)(App);