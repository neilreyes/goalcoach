import React, { Component } from 'react';
import { firebaseApp } from '../firebase';

class SignUp extends Component{
    constructor(props){
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            email:'',
            password: '',
            error: {
                message: '',
            }
        }
    }

    handleInputChange(event){
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name] : value,
        })
    }

    handleSubmit(event){
        const { email, password } = this.state;
        firebaseApp.auth().createUserWithEmailAndPassword(email, password)
            .catch(error=>{
                console.log('error: ', error);
                this.setState({ error });
            })
    }

    render(){
        return (
            <div className="container">
                <h2>Sign Up</h2>
                <div className="form-inline">
                    <div className="form-group">
                        <input 
                            className="form-control"
                            type="text"
                            placeholder="email"
                            name="email"
                            onChange={this.handleInputChange}
                        />
                        <input 
                            className="form-control"
                            type="password"
                            placeholder="password"
                            name="password"
                            onChange={this.handleInputChange}
                        />
                        <button
                            className="btn btn-primary"
                            type="button"
                            onClick={this.handleSubmit}
                        >
                            Sign Up
                        </button>
                    </div>
                    <div>{this.state.error.message}</div>
                </div>
            </div>
        )
    }
}

export default SignUp