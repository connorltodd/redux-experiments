import { INCREMENT, DECREMENT } from '../actions/counterConstants';

const initialState = {
    counterValue: 0,
}


const CounterReducer = (state = initialState, action) => {
    console.log("state", state)
    console.log("action", action)
    switch (action.type) {
        case INCREMENT:
            return { counterValue: state.counterValue + 1 };
        case DECREMENT:
            return { counterValue: state.counterValue - 1 };
        default:
            return state;
    }
}

export default CounterReducer;