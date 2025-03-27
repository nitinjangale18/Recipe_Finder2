import axios from 'axios'
import { API_URL } from '../constants/constant';

export const getRecipes = async (SearchedQuery) => {
    try {
        console.log("Fetching data for:", SearchedQuery);
        let response = await axios.get(`${API_URL}/search?q=${encodeURIComponent(SearchedQuery)}`);
        console.log("API Response:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error while calling API:", error.response?.data || error.message);
        return error.response;
    }
};

export const getRecipe = async (SearchedQuery) => {
    try {
        console.log("Fetching data for:", SearchedQuery);
        let response = await axios.get(`${API_URL}/get?rId=${encodeURIComponent(SearchedQuery)}`);
        console.log("API Response:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error while calling API:", error.response?.data || error.message);
        return error.response;
    }
};

