import { useState, useEffect } from "react";
import BookCard from "./BookCard";
import BookForm from "./BookForm";
import styles from "./BookList.module.css";

export default function BookList() {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);

  const fetchBooks = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/tasks`);
      const data = await res.json();

      if (Array.isArray(data)) {
        setBooks(data);
      } else {
        console.error("Unexpected response:", data);
        setBooks([]);
      }
    } catch (error) {
      console.error("Error fetching tasks:", error);
      setBooks([]);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleDelete = async (id) => {
    await fetch(`${import.meta.env.VITE_API_URL}/tasks/${id}`, {
      method: "DELETE",
    });
    fetchBooks();
  };

  const handleEditSubmit = async (updatedBook) => {
    await fetch(`${import.meta.env.VITE_API_URL}/tasks/${updatedBook.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedBook),
    });
    setEditingBook(null);
    fetchBooks();
  };

  const handleEdit = (book) => {
    setEditingBook(book);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className={styles.list}>
      {editingBook && (
        <div className={styles.editBox}>
          <h2>Edit Book</h2>
          <BookForm
            initialData={editingBook}
            onSubmit={handleEditSubmit}
            onCancel={() => setEditingBook(null)}
          />
        </div>
      )}
      <div className={styles.grid}>
        {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </section>
  );
}
