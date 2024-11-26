import { ApiImage, ApiResponse } from './unsplash-api.types';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';
const ACCESS_KEY = 'OgfDvHFl_T6LY9Vhko37JBCxPGr2pfGeirggxNgVGLA';

export const fetchImagesWithQuery = async (query: string, page:number): Promise<ApiResponse> => {
    const response = await axios.get<ApiResponse>(
        `/search/photos/?client_id=${ACCESS_KEY}&query=${query}&orientation=landscape&per_page=12&page=${page}`);
    return response.data;
};