import { useState, useEffect } from "react";
import BookCard from "./BookCard";
import BookForm from "./BookForm";
import styles from "./BookList.module.css";

export default function BookList({ refreshTrigger }) {
    const [books, setBooks] = useState([]);
    const [editingBook, setEditingBook] = useState(null);

    const fetchBooks = async () => {
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}`);
            const data = await res.json();
            setBooks(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error("Error fetching books:", error);
            setBooks([]);
        }
    };

    useEffect(() => {
        fetchBooks();
    }, [refreshTrigger]);

    const handleDelete = async (id) => {
        await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: "DELETE",
        });
        fetchBooks();
    };

    const handleEditSubmit = async (updatedBook) => {
        await fetch(`${import.meta.env.VITE_API_URL}/${updatedBook.id}`, {
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
        <section className={styles.bookList__list}>
            {editingBook && (
                <div className={styles.bookList__editBox}>
                    <h2>Edit Book</h2>
                    <BookForm
                        initialData={editingBook}
                        onSubmit={handleEditSubmit}
                        onCancel={() => setEditingBook(null)}
                    />
                </div>
            )}
            <div className={styles.bookList__grid}>
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
