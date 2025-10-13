import axios from "axios";

const API_URL = 'http://localhost:8080/api/book_details';
const Fast_API_URL = 'http://127.0.0.1:8000';

export const getAllBooks = () => axios.get(API_URL);
export const postBookDetails = (formData) => axios.post(API_URL, formData);
export const fetchBookDetailsById = (id) => axios.get(`${API_URL}/${id}`);
export const patchBookDetailsById = (id, formData) => axios.patch(`${API_URL}/${id}`, formData);
export const deleteBookById = (id) => axios.delete(`${API_URL}/${id}`);
export const getBooksBySearchCriteria = (searchData) => axios.post(API_URL + "/search", searchData);
export const getAllAlerts = () => axios.get(API_URL + "/alerts");
export const getAlertsCount = () => axios.get(API_URL + "/alerts/count");
export const getSuggestedPrice = (formData) => axios.post(Fast_API_URL + "/predict_price", formData)