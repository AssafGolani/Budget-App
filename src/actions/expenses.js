import db from '../firebase/firebase';
import { ref, set, push } from 'firebase/database';
import uuid from 'uuid';


// ADD_EXPENSE
export const addExpense = (expense) => ({
    type:'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '',
             note = '',
             amount = 0,
             createdAt = 0
            } = expenseData;
        const expense = { description, note, amount, createdAt };
        push(ref(db, 'expenses'), expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        }).catch((error) => {
            // Handle any errors that occurred during the set operation
            console.error('Error setting data:', error);
        });
    };
}

// REMOVE_EXPENSE
export const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});