import { combineReducers } from 'redux'
import NewsReducers from './reducerNews'
import PeopleReducers from './reducerPeople'
import SearchNewsReducers from './reducerSearchNews'

const rootReducers = combineReducers({
  news: NewsReducers,
  people: PeopleReducers,
  searchNews: SearchNewsReducers
})

export default rootReducers
