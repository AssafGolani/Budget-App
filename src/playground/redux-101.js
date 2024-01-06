import { createStore } from 'redux';

// Action generators - functions that return action objects

const incrementCount = ({incrementBy = 1} = {} )=> ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({dencrementBy = 1} = {} )=> ({
    type: 'DECREMENT',
    dencrementBy
});

const setCount = ({count}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action

const countReducer = ((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
        return {
            count: state.count - action.dencrementBy
        };
        case 'SET':
        return {
            count: action.count
        };
        case 'RESET':
        return {
            count: 0
        };
        default:
            return state;
    }
});

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// Actions - that an object that gets sent to the store

// I'd like to increment the count
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });
store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());
store.dispatch(resetCount());

// store.dispatch({
//     type: 'RESET'
// });

store.dispatch(decrementCount());
store.dispatch(decrementCount( { dencrementBy: 10}));
store.dispatch(setCount({count: 101}));
// store.dispatch({
//     type: 'SET',
//     count: 101
// });

unsubscribe();

