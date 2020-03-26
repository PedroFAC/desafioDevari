import {combineReducers} from 'redux'
import login from './login'
import receitas from './receitas'
export default combineReducers({
    login,
    receitas
})