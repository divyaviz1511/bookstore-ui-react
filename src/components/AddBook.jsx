import react, {useState, useMemo, useEffect} from "react";
import { debounce } from 'lodash';
import { getSuggestedPrice, postBookDetails } from "../services/bookServices";
import BookForm from "./BookForm";

function AddBook() {
    const [formData, setFormData] = useState({
        title : "",
        author : "",
        price: "",
        quantity: "",
        language: "",
        releasedDate: "",
        genre:"",
        pageCount:""
    });

    const [suggestedPrice, setSuggestedPrice] = useState();

    /*const suggestedPriceFromPythonAPI = async() => {
        try {
            const getYear = new Date(formData.releasedDate).getFullYear();
            const response = await getSuggestedPrice({
                'pageCount': Number(formData.pageCount), 
                'releasedYear': Number(getYear),
                'author': formData.author, 
            });
            setSuggestedPrice(response.data.suggested_price);
            setFormData((prev) => ({
                        ...prev,
                        price: response.data.suggested_price
                    }));
        } catch(error) {
            console.error("Error while fetching suggested price via api: " , error);
        }

    }*/
   const suggestedPriceFromPythonAPI = useMemo(() =>
      debounce(async (formData) => {
        if (formData.pageCount && formData.releasedDate && formData.author) {
            try {
                const getYear = new Date(formData.releasedDate).getFullYear();
                const response = await getSuggestedPrice({
                    'pageCount': Number(formData.pageCount), 
                    'releasedYear': Number(getYear),
                    'author': formData.author, 
                });
                setSuggestedPrice(response.data.suggested_price);
                } catch (err) {
                console.error('Prediction failed:', err.message);
            }
        }
      }, 600),
    []);

    useEffect(() => {
        suggestedPriceFromPythonAPI(formData);
        
        //Cleanup to prevent memory leaks
        return () => {
            suggestedPriceFromPythonAPI.cancel();
        };
    },  [formData]);

   const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
        //suggestedPriceFromPythonAPI()
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
                releasedDate: "",
                genre:"",
                pageCount:""
            });
            alert("Book Added !");
        } catch (error) {
            console.error("Error Posting the Book Details: ", error);
        }
   }

    return (
        <div>
            <h4>Add New Book</h4>
            <BookForm handleChange={handleChange} handleSubmit={handleSubmit} formData={formData} suggestedPrice={suggestedPrice}/>
        </div>
    );
}

export default AddBook;