import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

import { 
    newTransectionReducer, 
    allTransectionsReducer
    } from './reducers/transaction'

const reducer = combineReducers({
    newTransection: newTransectionReducer,
    allTransections: allTransectionsReducer,
})



const middlware = [thunk];
const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middlware)))

export default store;