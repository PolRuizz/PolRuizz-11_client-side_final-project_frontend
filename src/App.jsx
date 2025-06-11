import AddBookForm from "./components/AddBookForm";
import BookList from "./components/BookList";
import styles from "./App.module.css";
import { useBooksApi } from "./components/hooks/useBookApi";

export default function App() {
    const {
        books,
        loading,
        error,
        createBook,
        deleteBook,
        updateBook,
        fetchBooks,
    } = useBooksApi();

    const handleAdd = async (newBook) => {
        await createBook(newBook);
    };

    return (
        <div className={styles.app}>
            <h1>My Book Collection</h1>
            {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
            <AddBookForm onAdd={handleAdd} />
            <BookList
                books={books}
                loading={loading}
                onDelete={deleteBook}
                onUpdate={updateBook}
                onRefresh={fetchBooks}
            />
        </div>
    );
}
