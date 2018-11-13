import React, { Component } from 'react';
import { goalRef } from '../firebase';
import { connect } from 'react-redux';

class AddGoal extends Component{
    constructor(props){
        super(props)
        
        this.handeInputChange = this.handeInputChange.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);

        this.state = {
            title: '',
        }
    }

    handeInputChange(event){
        this.setState({
            title: event.target.value
        });
    }

    handleOnClick(event){
        const { title } = this.state;
        const { email } = this.props;

        goalRef.push({
            email,
            title
        })
        
        this.setState({
            title: '',
        })
    }

    render(){
        return(
            <div className="form-inline">
                <div className="form-group">
                    <input
                        value={this.state.title}
                        type="text"
                        placeholder="Add a goal"
                        className="form-control"
                        style={{ marginRight: '5px' }}
                        onChange={this.handeInputChange}
                    />
                    <button
                        className="btn btn-success"
                        type="button"
                        onClick={this.handleOnClick}
                    >
                        Submit
                    </button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    const { email } = state;
    return {
        email
    }
}

export default connect(mapStateToProps, null)(AddGoal);