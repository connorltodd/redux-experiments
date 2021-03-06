import { ADD_TODO, DELETE_TODO } from "../constants/todosConstants";

const initialState = {
    todos: [],
}

const TodoReducer = (state = initialState, action) => {
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
