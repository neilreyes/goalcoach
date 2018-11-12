import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase';

class SignIn extends Component{
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

        this.state = {
            email: '',
            password: '',
            error: {
                message : ''
            }
        }
    }

    handleSubmit(event){
        console.log('this');
        event.preventDefault();
        const { email, password } = this.state;
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
            .catch(error=>{
                console.log('error: ', error);
                this.setState({ error });
            });
    }

    handleInputChange(event){
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value,
        });
    }

    render(){
        return (
            <div className="container">
                <h2>Sign In</h2>
                <form
                    className="form"
                    onSubmit={this.handleSubmit}
                >
                    <div className="form-group">
                        <input
                            className="form-control"
                            onChange={this.handleInputChange}
                            name="email"
                            type="email"
                            value={this.state.email}
                            placeholder="Email"
                        />
                        <input 
                            className="form-control"
                            onChange={this.handleInputChange}
                            name="password"
                            type="password"
                            value={this.state.password}
                            placeholder="Password"
                        />
                        <button
                            className="btn btn-success"
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                    <div><Link to={'/signup'}>Sign up instead</Link></div>
                    <div>{this.state.error.message}</div>
                </form>
            </div>
        )
    }
}

export default SignIn