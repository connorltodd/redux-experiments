import { ADD_TODO, DELETE_TODO } from "../actions/todosConstant";

const initialState = {
    todos: [],
}

const TodoReducer = (state = initialState, action) => {
    console.log("state", state)
    console.log("action", action)
    switch (action.type) {
        case ADD_TODO:
            return { ...state, todos: [...state.todos, action.payload] };
        case DELETE_TODO:
            return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload.id) }
        default:
            return state;
    }
}

export default TodoReducer;
