import react, { useEffect, useState } from "react";
import { fetchBookDetailsById } from "../services/bookServices";
import { useParams } from "react-router-dom";

function BookDetailedInfo() {
    const {id}= useParams();
    const [bookInfo, setBookInfo] = useState({});
    
    const fetchBookDetailedInfoFromAPI = async(id) => {
        try {
                const response = await fetchBookDetailsById(id);
                setBookInfo(response.data);
            } catch (error) {
                console.error("Error fetching the books: ", error);
            }
    }
    
    useEffect(()=> {
        fetchBookDetailedInfoFromAPI(id);
    },[id]);

    if (!bookInfo.title) return <div>Loading book details...</div>;

    return (
        <div>
            <h4>Detailed Info</h4>
            <table className="table table-bordered table-hover">
                <tbody>
                <tr>
                    <td>Title</td>
                    <td>{bookInfo.title}</td>
                </tr>
                <tr>
                    <td>Author</td>
                    <td>{bookInfo.author}</td>
                </tr>
                <tr>
                     <td>Price</td>
                    <td>${bookInfo.price}</td>
                </tr>
                <tr>
                     <td>Language</td>
                    <td>{bookInfo.language}</td>
                </tr>
                <tr>
                    <td>Released Date</td>
                    <td>{bookInfo.releasedDate}</td>
                </tr>
                <tr>
                    <td>Genre</td>
                    <td>{bookInfo.genre}</td>
                </tr>
                <tr>
                     <td>current Quantity</td>
                    <td>{bookInfo.quantity}</td>
                </tr>
                <tr>
                     <td>pageCount</td>
                    <td>{bookInfo.pageCount}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );

}

export default BookDetailedInfo;