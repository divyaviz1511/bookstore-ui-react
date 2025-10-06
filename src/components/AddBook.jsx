import react, {useState} from "react";
import { postBookDetails } from "../services/bookServices";
import BookForm from "./BookForm";

function AddBook() {
    const [formData, setFormData] = useState({
        title : "",
        author : "",
        price: "",
        quantity: "",
        language: "",
        releasedDate: ""
    });

   const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
   }

   const handleSubmit = async(e) => {
        e.preventDefault(); //Prevents page refresh so we can see the alert
        try{
            await postBookDetails(formData);
            setFormData({
                title : "",
                author : "",
                price: "",
                quantity: "",
                language: "",
                releasedDate: ""
            });
            alert("Book Added !");
        } catch (error) {
            console.error("Error Posting the Book Details: ", error);
        }
   }

    return (
        <div>
            <h4>Add New Book</h4>
            <BookForm handleChange={handleChange} handleSubmit={handleSubmit} formData={formData}/>
        </div>
    );
}

export default AddBook;