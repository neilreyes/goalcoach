import React, { Component } from 'react';

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

export default AddGoal;