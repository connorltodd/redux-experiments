import { INCREMENT, DECREMENT } from '../constants/counterConstants';

const initialState = {
    counterValue: 0,
}


const CounterReducer = (state = initialState, action) => {
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