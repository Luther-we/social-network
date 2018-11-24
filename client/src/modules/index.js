import { combineReducers } from 'redux'
import counter from './counter'
import { reducer as formReducer } from 'redux-form'
import input from '../component/input/services/inputReducer'

export default combineReducers({
  counter,
  form: formReducer,
  inputs: input
})
