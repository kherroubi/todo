import React from 'react'

const Todos = (props) => {

    const todoList = props.todos.length ? (
        props.todos.map( todo => {
            return (
                <div className="collection-item" key={todo.id} onClick= {() => props.deleteTodo(todo.id)}>
                    <span>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <div className="collection-item" >
             <p className="center">You have no todo's left!</p>
        </div>
    )

    return (
        <div className="todos collection">
            { todoList }
        </div>
    )
}

export default Todos