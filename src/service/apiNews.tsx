import axios from 'axios';
import { NEWS_API_URL, NEWS_API_KEY, NEWS_API_COUNTRY } from '../const/constants';

export const fetchNews = async () => {
    try {
        const response = await axios.get(
            `${NEWS_API_URL}?country=${NEWS_API_COUNTRY}&apiKey=${NEWS_API_KEY}`
        );
        return response.data.articles;
    } catch (error) {
        console.error('Error fetching news:', error);
        throw error;
    }
};
