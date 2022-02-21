import {createStore, applyMiddleware, combineReducers} from "redux"
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import reducer from "./reducer"
import rootSaga from "./sagas"

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}

export const store = createStore(reducer, applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga)