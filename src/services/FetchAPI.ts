import axios from 'axios';

const FetchAPI = {
  get: async (url: string, params?: object) => {
    const response = await axios.get(url, { params });
    return response.data;
  },
};

export default FetchAPI;
