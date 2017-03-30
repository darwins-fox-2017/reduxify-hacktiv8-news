export const peopleReducer = (state = [], action) =>
{
  switch (action.type) {
    case 'LOAD_PEOPLE':
      return action.payload
    default:
      return state
  }
}
