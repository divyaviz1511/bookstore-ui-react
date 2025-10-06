# 📚 React Book Management App (Frontend)

This is the **React frontend** for a Book Inventory System. It connects to a Spring Boot backend to perform **CRUD operations** on a collection of books.

---

## 🚀 Features Implemented

- 📖 **View Book List** — Displays all books with:
  - Title
  - Author
  - Price
  - Quantity
  - Language
  - Release Date
- ➕ **Add Book** — Add new books using a form
- ✏️ **Edit Book** — Update existing book details
- 🌐 **REST Integration** — Connected to a Spring Boot backend with REST APIs

---

## 🛠️ Upcoming Features

- 🗑️ **Delete Book**
- 🔍 **Search Books** by title or author
- ⚠️ **Low Stock Alerts** — Highlight books with quantity below a threshold

---

## 🔗 Backend Repository

The backend API is built using **Spring Boot** and can be found here:

👉 [Spring Boot Book Inventory API] [https://github.com/divyaviz1511/book-inventory-api](https://github.com/divyaviz1511/book-inventory-api)

---

## 🧰 Tech Stack

- **Frontend:** React, Bootstrap
- **State Management:** React Hooks (`useState`, `useEffect`)
- **Routing:** React Router
- **HTTP Requests:** Axios

---

## 📦 Running Locally

> Make sure your Spring Boot backend is running at `http://localhost:8080`.

```bash
# 1. Clone the repo
git clone [https://github.com/yourusername/book-frontend.git](https://github.com/divyaviz1511/bookstore-ui-react)
cd bookstore-ui

# 2. Install dependencies
npm install

# 3. Start the React app
npm start
