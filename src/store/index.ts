import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import authReducer from './modules/auth'
import uiReducer from './modules/ui'
import notifyReducer from './modules/notify'
import themeReducer from './modules/theme'

const rootReducer = combineReducers({
    auth : authReducer,
    ui : uiReducer,
    notify: notifyReducer,
    theme: themeReducer
})

export type RootState = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
