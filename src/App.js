import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';
import DeleteBook from './components/DeleteBook';
import SearchPage from './pages/SearchPage';
import AlertsPage from './pages/AlertsPage';
import { getAlertsCount } from './services/bookServices';
import { useEffect, useState } from 'react';
import BookDetailedInfo from './components/BookDetailedInfo';


function App() {
  const [count, setCount] = useState([0]);
  
  const fetchAlertCount = async() => {
    try {
      const response = await getAlertsCount();
      setCount(response.data);
    }catch(error) {
      console.error("Error Fetch Count:", error);
    }
  }

  useEffect(() => {
    fetchAlertCount();
  },[]);

  return (
   <div className="container-fluid">
    <div className="row">
      <div className="col-md-3 col-lg-2 bg-secondary bg-opacity-10 vh-100 border-end p-4">
        <h4>Inventory Menu</h4>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link to="/" className="nav-link">Book Lists</Link>
          </li>
          <li className="nav-item">
            <Link to="/add" className="nav-link">Add Book</Link>
          </li>
          <li className="nav-item">
            <Link to="/search" className="nav-link">Search Books</Link>
          </li>
          <li className="nav-item">
            <Link to="/alerts" className="nav-link">Low Stock Alerts {count > 0 && (
                                <span className="badge bg-danger ms-2">
                                    {count}
                                </span>
                            )}</Link>
          </li>
        </ul>
      </div>
      <div className="col-md-9 col-lg-10 p-4">
        <Routes>
          <Route path = "/" element={<HomePage/>} />
          <Route path = "/add" element={<AddBook/>} />
          <Route path = "/edit/:id" element={<EditBook/>} />
          <Route path = "delete/:id" element={<DeleteBook/>}/>
          <Route path = "/search" element={<SearchPage/>} />
          <Route path = "/alerts" element={<AlertsPage/>}/>
          <Route path = "/book-info/:id" element={<BookDetailedInfo></BookDetailedInfo>}/>
        </Routes>
      </div>
    </div>
   </div> 
  );
}

export default App;
