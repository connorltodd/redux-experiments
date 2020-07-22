import { combineReducers } from 'redux';
import CounterReducer from './CounterReducer';
import TodoReducer from './TodoReducer';
import UsersReducer from './UsersReducer';

const rootReducer = combineReducers({
    counter: CounterReducer,
    todos: TodoReducer,
    users: UsersReducer
})

export default rootReducer;