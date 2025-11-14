import react from "react";
import { useNavigate } from "react-router-dom";

const BookList = ({books}) => {
    const navigate = useNavigate();

    const handleEdit = (id) => {
        navigate(`/edit/${id}`);
    }

    const handleDelete = (id) => {
        const confirmation = window.confirm("Are you sure you want to delete this book ? ");
        if (confirmation) {
          navigate(`/delete/${id}`);
        }
    }

    const handleBookInfo = (id) => {
        navigate(`/book-info/${id}`);
    }

    return (
    <div>
      <h4>Book List</h4>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Price</th>
            <th>Language</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }} onClick={() => handleBookInfo(book.id)}>{book.title}</td>
              <td>{book.author}</td>
              <td>${book.price}</td>
              <td>{book.language}</td>
              <td>
                <button className="btn btn-sm btn-primary me-2" onClick={() => handleEdit(book.id)}>Edit</button>
                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(book.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
}

export default BookList;