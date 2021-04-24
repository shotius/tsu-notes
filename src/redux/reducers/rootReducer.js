import { combineReducers } from 'redux'
import notesReducer from './notesReducer'

const root = combineReducers({
  notes: notesReducer,
})

export default root