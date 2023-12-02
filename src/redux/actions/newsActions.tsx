export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS';

export const fetchNewsSuccess = (news) => ({
    type: FETCH_NEWS_SUCCESS,
    payload: news,
});
