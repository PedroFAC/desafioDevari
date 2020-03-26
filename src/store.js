import {createStore, combineReducers} from 'redux'
import login from './reducers/login'
import receitas from './reducers/receitas'

const reducers = combineReducers(
    {
        login,
        receitas
    }
)

const store  = createStore(reducers)

export default store