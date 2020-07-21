import React from 'react';
import { connect } from 'react-redux';
import { INCREMENT, DECREMENT } from '../actions/counterConstants';

function Counter(props) {
    return (
        <div>
            <h1>{props.counter}</h1>
            <button onClick={props.increment}>Increment</button>
            <button onClick={props.decrement}>Decrement</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    counter: state.counter.counterValue,
})

const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch({ type: INCREMENT, payload: { username: "peter" } }),
    decrement: () => dispatch({ type: DECREMENT }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
