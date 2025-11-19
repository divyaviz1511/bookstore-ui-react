import react from 'react';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function BookCard({results}) {
    const navigate = useNavigate();

    if (!results || results.length == 0) return null;

    const handleBookInfo = (id) => {
        navigate(`/book-info/${id}`);
    }

    return (
        <div>
            <h5> Semantic Search Results</h5>
            <div style={{ display: "flex", gap: "1rem", color:'grey'}}>
            { results.map(book => (
            <Card bg="light" key={book.id} style={{width:'15rem', padding: "10px" }}>
                <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Subtitle>{book.author}</Card.Subtitle>
                    <Card.Text>
                        <strong>Language: </strong> {book.language}
                    </Card.Text>
                    <Card.Link style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }} onClick={() => handleBookInfo(book.id)}>Take me to this book</Card.Link>
                </Card.Body>
            </Card>
            ))}
            </div>
        </div>
    )
};

export default BookCard;