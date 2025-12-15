import axios from 'axios';

const weather_api = axios.create({
    baseURL: process.env.WEATHER_API_BASE_URL,
    timeout: 1000,
});

const weatherService = {
    getWeather: async (location) => {
        try {
            const response = await weather_api.get('/current', {
                params: { query: location, access_key: process.env.WEATHER_API_KEY }
            });
            return response.data;
        }
        catch (error) {
            console.error("Error fetching weather data:", error);
            throw error;
        }
    }
}

export default api;