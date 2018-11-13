import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';

import AddGoal from './AddGoal';
import GoalList from './GoalList';

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
                <h1>Goals</h1>
                <button
                    className="btn"
                    onClick={this.handleSignOut}
                >
                    Sign Out
                </button>
                
                <AddGoal />
                <GoalList />
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log('state', state);

    return { state };
}

export default connect(mapStateToProps, null)(App);