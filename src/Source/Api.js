import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
export const fetchPhotos = async (query, page) => {
  try {
    const searchParams = new URLSearchParams({
      key: '12470042-156b4534868fdb2d637b9b4f4',
      query: { query },
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      per_page: 12,
      page,
    });
  const response = await axios.get(`?${searchParams}`);
    return response.data;
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
  }
};
