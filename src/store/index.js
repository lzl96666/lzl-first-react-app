import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import { counterReducer } from './count.redux'
import { user } from './user.redux'

import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  combineReducers({ counter: counterReducer, user }),
  applyMiddleware(logger, sagaMiddleware)
)
sagaMiddleware.run(mySaga)

export default store
