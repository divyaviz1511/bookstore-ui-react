import axios from "axios";

const API_URL = 'http://localhost:8080/api/book_details';

export const getAllBooks = () => axios.get(API_URL);
export const postBookDetails = (formData) => axios.post(API_URL, formData);
export const fetchBookDetailsById = (id) => axios.get(`${API_URL}/${id}`);
export const patchBookDetailsById = (id, formData) => axios.patch(`${API_URL}/${id}`, formData);
export const deleteBookById = (id) => axios.delete(`${API_URL}/${id}`);