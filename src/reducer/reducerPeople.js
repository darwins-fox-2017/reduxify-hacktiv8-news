export const peopleReducer = (state = [{'name':'Didit'}], action) =>
{
  switch (action.type) {
    case 'LOAD_PEOPLE':
      return action.payload
      break;
    default:
      return state
  }
}
