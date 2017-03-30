export const actionSearchNews = (title,news) => {
  return {
    type: 'SEARCH_NEWS',
    payload:{
      title:title,
      news:news
    }
  }
}
