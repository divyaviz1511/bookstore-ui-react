import react, { useState } from 'react'
import { getBooksFromSemanticSearchResults } from '../services/bookServices';
import BookCard from './BookCard';

function SemanticSearch() {
    const [query, setQuery] = useState("");
    const [queryResults, setQueryResults] = useState([]);

    const onChange = (e) => {
        setQuery(e.target.value);
    }

    const handleSearch = async() => {
        const queryString = {'query': query};
        try {
                const response = await getBooksFromSemanticSearchResults(queryString);
                setQueryResults(response.data);
            } catch(error) {
                console.error("Error fetching Book Search Results: ", error);
                alert("Error fetching Book Search Results. Please try again later");
            }
    }

    return (
        <div>
            <input type="text" placeholder='Semantic Search Books' value={query} onChange={onChange} />
            <button onClick={handleSearch} >Search</button>
            <br/>
            <br/>
            <BookCard results= {queryResults}/>
        </div>
    );
}

export default SemanticSearch;