import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import authReducer from './ducks/auth'
import uiReducer from './ducks/ui'

const rootReducer = combineReducers({
    auth : authReducer,
    ui : uiReducer
})

export type RootState = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
