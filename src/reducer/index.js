import { combineReducers } from 'redux'
import { newsReducer } from './reducerNews'
import { peopleReducer } from './reducerPeople'
import SearchNewsReducer from './reducerSearchNews'

const rootReducers = combineReducers({
  news: newsReducer,
  people: peopleReducer
})

export default rootReducers
