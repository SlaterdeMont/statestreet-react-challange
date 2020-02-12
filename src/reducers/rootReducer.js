const initState = {
    //transactions: require('./data/data.json')
    data: [],
    transactions: [],
    activeTransaction: {},
    activeFilters: {}
}

const rootReducer = (state = initState, action) => {
    if(action.type === "ADD_DATA"){
        return {
            data: action.transactions,
            transactions: action.transactions
        }
    }
    else if(action.type === "ADD_ACTIVETRANSACTION"){
        return {
            ...state,
            activeTransaction: action.activeTransaction
        }
    }
    else if(action.type === "ADD_TRANSACTIONS"){
        return {
            ...state,
            transactions: action.transactions
        }
    }
    return state;
}

export default rootReducer;