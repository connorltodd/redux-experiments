import React, { useState } from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { ADD_TODO, DELETE_TODO } from '../constants/todosConstants';


function TodoList(props) {
    const [todoInput, setTodoInput] = useState('');
    return (
        <div>
            <input type="text" onChange={(event) => setTodoInput(event.target.value)} value={todoInput} />
            <button
                onClick={() => {
                    props.addTodo({ content: todoInput, id: uuidv4() })
                    setTodoInput('')
                }}>
                ADD TODO
                </button>
            <p>Todos List</p>
            {props.todos.map(todo => <Todo {...todo} deleteTodo={props.deleteTodo} key={todo.content} />)}
        </div>
    )
}

const mapStateToProps = (state) => ({
    todos: state.todos.todos
})

const mapDispatchToProps = (dispatch) => ({
    addTodo: (todo) => dispatch({ type: ADD_TODO, payload: todo }),
    deleteTodo: (todoId) => dispatch({ type: DELETE_TODO, payload: { id: todoId } })
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

