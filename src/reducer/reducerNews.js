export const newsReducer = (state = [{'title':'Didit', 'url' : 'https://www.google.com'}], action) =>
{
  switch (action.type) {
    case 'LOAD_NEWS':
      return action.payload
      break;
    default:
      return state
  }
}
