function BookForm({handleChange, handleSubmit, formData, suggestedPrice}) {
    if (!formData) return null;
    
    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label>Title</label>
                <input type="text" name="title" className="form-control" value={formData.title} onChange={handleChange} required />
            </div>
            <div className="mb-3">
                <label>Author</label>
                <input type="text" name="author" className="form-control" value={formData.author} onChange={handleChange} required/>
            </div>
            <div className="mb-3">
                <label>Genre</label>
                <input type="text" name="genre" className="form-control" value={formData.genre} onChange={handleChange} required />
            </div>
            <div className="mb-3">
                <label>Language</label>
                <input type="text" name="language" className="form-control" value={formData.language} onChange={handleChange} required />
            </div>
            <div className="mb-3">
                <label>PageCount</label>
                <input type="text" name="pageCount" className="form-control" value={formData.pageCount} onChange={handleChange} required />
            </div>
            <div className="mb-3">
                <label>Released Date</label>
                <input type="date" name="releasedDate" className="form-control" value={formData.releasedDate} onChange={handleChange} required />
            </div>
            <div className="mb-3">
                <label>Price</label>
                <input type="number" name="price" step="0.01" min="0.00" className="form-control" value={formData.price} onChange={handleChange} required />
            </div>
            {suggestedPrice && (
            <div style={{ marginTop: "6px" }}>
            <span style={{
                backgroundColor: "#fff9e6",  
                color: "#8a6d00",           
                padding: "6px 10px",
                borderRadius: "12px",
                fontSize: "0.85em",
                fontWeight: "500",
                display: "inline-block"
            }}>
            AI Suggested Price
            <span
                title="This is an estimated price based on similar books"
                style={{ marginLeft: "6px", cursor: "pointer" }}>ℹ️</span>
                :&nbsp;&nbsp; ${suggestedPrice}
            </span>
            </div>
            )}
            <br></br>
            <div className="mb-3">
                <label>Quantity</label>
                <input type="number" name="quantity" step="1" min="0.00" className="form-control" value={formData.quantity} onChange={handleChange} required />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default BookForm;