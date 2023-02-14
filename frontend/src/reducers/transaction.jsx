import {
    CREATE_TRANSECTION_REQUEST,
    CREATE_TRANSECTION_SUCCESS,
    CREATE_TRANSECTION_FAIL,

    ALL_TRANSECTION_REQUEST,
    ALL_TRANSECTION_SUCCESS,
    ALL_TRANSECTION_FAIL,

} from '../constants/transectionsConstants'

export const newTransectionReducer = (state = {}, action) => {
    switch (action.type) {

        case CREATE_TRANSECTION_REQUEST:
            return {
                ...state,
                loading: true
            }

        case CREATE_TRANSECTION_SUCCESS:
            return {
                loading: false,
                data: action.payload
            }

        case CREATE_TRANSECTION_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state;
    }
}

export const allTransectionsReducer = (state = { transactions: [] }, action) => {
    switch (action.type) {

        case ALL_TRANSECTION_REQUEST:
            return {
                loading: true
            }

        case ALL_TRANSECTION_SUCCESS:
            return {
                loading: false,
                data: action.payload.transactions,
            }

        case ALL_TRANSECTION_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state;
    }
}
