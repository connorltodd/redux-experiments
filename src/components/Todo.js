import React from 'react';

function Todo(props) {
    return (
        <span>
            <p>{props.content}</p>
            <button onClick={() => props.deleteTodo(props.id)}>DELETE TODO</button>
        </span>
    )
}


export default Todo;