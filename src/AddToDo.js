import React, { Component } from "react"

class AddToDo extends Component{

    state = {
        content:''
    }
    handleChange = (e) => {
        this.setState({content: e.target.value})
    }
    handleSubmit = (e) => {
        e.preventDefault()
        if(this.state.content.length > 0)
            this.props.addTodo(this.state.content)

        this.setState({
            content: ''
        })
    }
    render (){
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <label>Add new todo:</label>
                    <input type="text" value={this.state.content} onChange={this.handleChange} />
                </form>
            </div>
        )
    }
}

export default AddToDo