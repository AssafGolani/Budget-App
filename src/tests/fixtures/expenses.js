import moment from 'moment';

export const expenses = [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
}, {
        id: '2',
        description: 'Rent',
        note: '',
        amount: 109500,
        createdAt: moment(0).subtract(4, 'days').valueOf() // subtract 4 days from the createdAt date
}, {
        id: '3',
        description: 'Credit Card',
        note: '',
        amount: 4500,
        createdAt: moment(0).add(4, 'days').valueOf() // add 4 days to the createdAt date

}]