function BookForm({handleChange, handleSubmit, formData}) {
    if (!formData) return null;
    
    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label>Title</label>
                <input type="text" name="title" className="form-control" value={formData.title} onChange={handleChange} required />
            </div>
            <div className="mb-3">
                <label> Author</label>
                <input type="text" name="author" className="form-control" value={formData.author} onChange={handleChange} required/>
            </div>
            <div className="mb-3">
                <label>Price</label>
                <input type="number" name="price" step="0.01" min="0.00" className="form-control" value={formData.price} onChange={handleChange} required />
            </div>
            <div className="mb-3">
                <label>Quantity</label>
                <input type="number" name="quantity" step="1" min="0.00" className="form-control" value={formData.quantity} onChange={handleChange} required />
            </div>
            <div className="mb-3">
                <label>Language</label>
                <input type="text" name="language" className="form-control" value={formData.language} onChange={handleChange} required />
            </div>
            <div className="mb-3">
                <label>Released Date</label>
                <input type="date" name="releasedDate" className="form-control" value={formData.releasedDate} onChange={handleChange} required />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default BookForm;