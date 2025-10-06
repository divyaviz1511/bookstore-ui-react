import react, {useEffect, useState} from "react";
import { fetchBookDetailsById, patchBookDetailsById } from "../services/bookServices";
import { useNavigate, useParams } from "react-router-dom";
import BookForm from "./BookForm";

function EditBook () {
    const {id}= useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
         title : "",
                author : "",
                price: "",
                quantity: "",
                language: "",
                releasedDate: ""
    });

    
    const fetchBookDetailsByIDFromAPI  = async(id) => {
        try {
            const response = await fetchBookDetailsById(id);
            setFormData(response.data);
        } catch (error) {
            console.log("Error fetch book detail: ", error);
        }
    }

    useEffect(() => {
        fetchBookDetailsByIDFromAPI(id);
    }, [id]);


    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            await patchBookDetailsById(id, formData);
            alert("Book updated successfully !");
            navigate("/");

        } catch (error) {
            console.error("Error updating the book details: ", error);
        }
    }

    return (
        <div>
            <h4>Edit Book Details</h4>
            <BookForm handleChange={handleChange} handleSubmit={handleSubmit} formData={formData}/>
        </div>
    );
}

export default EditBook;