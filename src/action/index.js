export const actionLoadNews = (data) => {
  return {
    type: 'LOAD_NEWS',
    payload:data
  }
}

export const actionLoadPeople = (data) => {
  return {
    type: 'LOAD_PEOPLE',
    payload:data
  }
}

export const actionSearchNews = (keyword,data) => {
  return {
    type: 'SEARCH_NEWS',
    payload:{
      keyword,
      data
    }
  }
}
