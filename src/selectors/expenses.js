import moment from 'moment';

// Get visible expenses
export default (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt); // convert expense.createdAt to a moment object
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true; // if startDate exists, check if it is same or before the expense.createdAt date
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true; // if endDate exists, check if it is same or after the expense.createdAt date
        const textMatch = typeof text !== 'string' || expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if(sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    });
};