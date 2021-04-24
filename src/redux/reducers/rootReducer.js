import { combineReducers } from 'redux'
import notes from './notesReducer'

const root = combineReducers({
  notes
})

export default root