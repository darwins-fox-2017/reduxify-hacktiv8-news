export const newsReducer = (state = [], action) =>
{
  switch (action.type) {
    case 'LOAD_NEWS':
      return action.payload
    case 'SEARCH_NEWS':
      return action.payload
    default:
      return state
  }
}
