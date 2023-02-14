import axios from 'axios'
import {
    CREATE_TRANSECTION_REQUEST,
    CREATE_TRANSECTION_SUCCESS,
    CREATE_TRANSECTION_FAIL,

    ALL_TRANSECTION_REQUEST,
    ALL_TRANSECTION_SUCCESS,
    ALL_TRANSECTION_FAIL,

    CLEAR_ERRORS
} from '../constants/transectionsConstants'


export const newTransections = (productName , amount) => async (dispatch, getState) => {
    try {

        dispatch({ type: CREATE_TRANSECTION_REQUEST })

        const config = {
            baseURL : "http://localhost:5000",
            changeOrigin: true,
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin" :"*",
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
                "Access-Control-Allow-Headers": "x-access-token, Origin, X-Requested-With, Content-Type, Accept"
            }
        }

        const { data } = await axios.post("/transactions", {productName , amount}, config)

        dispatch({
            type: CREATE_TRANSECTION_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CREATE_TRANSECTION_FAIL,
            payload: error.response.data.message
        })
    }
}


export const allTransections = () => async (dispatch) => {
    try {

        dispatch({ type: ALL_TRANSECTION_REQUEST });
        const config = {
            baseURL : "http://localhost:5000",
            changeOrigin: true,
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin" :"*",
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
                "Access-Control-Allow-Headers": "x-access-token, Origin, X-Requested-With, Content-Type, Accept"
            }
        }

        const { data } = await axios.get('/transactions/all',config)
        
        dispatch({
            type: ALL_TRANSECTION_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_TRANSECTION_FAIL,
            payload: error.response.data.message
        })
    }
}

// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}