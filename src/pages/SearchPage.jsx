import React, {useState} from "react";
import { getBooksBySearchCriteria } from "../services/bookServices";
import SemanticSearch from "../components/SemanticSearch";

const SearchPage = () => {
    const [searchData, setSearchData] = useState({
        title:"",
        author:"",
        language:"",
        price:{operation:0, value:""},
        quantity:{operation:0, value:""},
        releasedYear:{operation:0, value:""}
    });

    const [results, setResults] = useState([]);

    const handleChange = (e) => {
        const {name, value} = e.target; 

        const shouldBeNumber = name.endsWith(".value") || name.endsWith(".operation");
        const parsedValue = shouldBeNumber && value !== "" ? Number(value) : value;

        if (name.includes(".")) {
            const [parent , child] = name.split(".");
            if (parent && child) {
                setSearchData((prev) => ({...prev, [parent] : {...prev[parent], [child] : parsedValue}}));
            }
        } else {
            setSearchData((prev) => ({...prev, [name]: parsedValue}));
        }
    }
    const submitHandler = async(e) => {
        e.preventDefault();
        try {
            const response = await getBooksBySearchCriteria(searchData);
            setResults(response.data);
        } catch(error) {
            console.error("Error fetching Book Search Results: ", error);
            alert("Error fetching Book Search Results. Please try again later");
        }
    }

    return (
        <div>
            <h4> Semantic Book Search </h4>
            <SemanticSearch/>

            <br/>
            <br/>
            <h4> Search Books Traditional way </h4>
            <form onSubmit= {submitHandler}>
                <div className="mb-3">
                    <label>Title </label>
                    <input type="text" name="title" className="form-control" value={searchData.title}  onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label>Author</label>
                    <input type="text" name="author" className="form-control" value={searchData.author}  onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label>Language</label>
                    <div className="row">
                        <div className="col-md-3 col-lg-2">
                            <select name="language" className="form-control" value={searchData.language}  onChange={handleChange}>
                                <option value="English">English</option>
                                <option value="Tamil">Tamil</option>
                                <option value="French">French</option>
                                <option value="Spanish">Spanish</option>
                            </select>
                        </div>  
                    </div>
                </div>
                <div className="mb-3">
                    <label>Price</label>
                    <div className="row">
                        <div className="col-md-3 col-lg-2">
                            <select name="price.operation" className="form-control" value={searchData.price.operation}  onChange={handleChange}>
                                <option value="0">equal to</option>
                                <option value="1">less than</option>
                                <option value="2">greater than</option>
                            </select>
                        </div>
                        <div className="col-md-9 col-lg-10">
                            <input type="number" name="price.value" className="form-control" value={searchData.price.value}  onChange={handleChange}/>
                        </div>  
                    </div>
                </div>
                <div className="mb-3">
                    <label>Quantity</label>
                    <div className="row">
                        <div className="col-md-3 col-lg-2">
                            <select name="quantity.operation" className="form-control" value={searchData.quantity.operation}  onChange={handleChange}>
                                <option value="0">equal to</option>
                                <option value="1">less than</option>
                                <option value="2">greater than</option>
                            </select>
                        </div>
                        <div className="col-md-9 col-lg-10">
                            <input type="number" name="quantity.value" className="form-control" value={searchData.quantity.value}  onChange={handleChange}/>
                        </div>  
                    </div>
                </div>
                <div className="mb-3">
                    <label>Year Released</label>
                    <div className="row">
                        <div className="col-md-3 col-lg-2">
                            <select name="releasedYear.operation" className="form-control" value={searchData.releasedYear.operation}  onChange={handleChange}>
                                <option value="0">in year</option>
                                <option value="1">before year</option>
                                <option value="2">after year</option>
                            </select>
                        </div>
                        <div className="col-md-9 col-lg-10">
                            <input type="number" name="releasedYear.value" className="form-control" value={searchData.releasedYear.value}  onChange={handleChange}/>
                        </div>  
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Search</button>
            </form>
            <br/><br/>
            {results.length > 0 && (
            <div>
                <h4> Book Search Results</h4>
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Language</th>
                            <th>Released</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map(book => (
                        <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>${book.price}</td>
                            <td>{book.quantity}</td>
                            <td>{book.language}</td>
                            <td>{book.releasedDate}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            )}
        </div>
    );

}

export default SearchPage;