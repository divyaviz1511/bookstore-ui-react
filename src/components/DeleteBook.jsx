import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { deleteBookById } from "../services/bookServices";

function DeleteBook() {
    const {id} = useParams();
    const navigate = useNavigate();

    const deleteBookByIdFromAPI = async(id) => {
        try {
            await deleteBookById(id);
            alert("Book deleted successfully !");
            navigate("/");
        } catch(error) {
            console.error("Error deleting the book: ", error);
            alert("Failed to delete book.");
            navigate("/");
        }
    }

    useEffect(() => {
        deleteBookByIdFromAPI(id)
    },[id, navigate]);


    return (null);
}

export default DeleteBook;