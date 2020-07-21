import { combineReducers } from 'redux';
import CounterReducer from './CounterReducer';
import TodoReducer from './TodoReducer';

const rootReducer = combineReducers({
    counter: CounterReducer,
    todos: TodoReducer
})

export default rootReducer;