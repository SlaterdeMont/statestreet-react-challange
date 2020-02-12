export const setTransaction = (transaction) => {
    return {
        type: 'ADD_ACTIVETRANSACTION',
        activeTransaction: transaction
    }
}

export const filterTransactions = (sortedTransactions) => {
    return {
        type: 'ADD_TRANSACTIONS',
        transactions: sortedTransactions
    }
}