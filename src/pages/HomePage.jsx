import React, {useEffect, useState} from 'react';
import { getAllBooks } from '../services/bookServices';
import BookList from '../components/BookList';

const HomePage = () => {
    const [books, setBooks] = useState([]);

    const fetchBooksFromAPI = async() => {
        try {
            const response = await getAllBooks();
            setBooks(response.data);
        } catch (error) {
            console.error("Error fetching the books: ", error);
        }
    }

    useEffect(()=> {
        fetchBooksFromAPI();
    },[]);

    return (
        <div>
            <BookList books = {books}></BookList>
        </div>


    );
};

export default HomePage;