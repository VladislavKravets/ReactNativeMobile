import { FETCH_NEWS_SUCCESS } from '../actions/newsActions';

const initialState = {
    news: [],
};

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_NEWS_SUCCESS:
            return {
                ...state,
                news: action.payload,
            };
        default:
            return state;
    }
};

export default newsReducer;
