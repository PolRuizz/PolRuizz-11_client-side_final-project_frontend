import AddBookForm from "./components/AddBookForm";
import BookList from "./components/BookList";
import styles from "./App.module.css";

export default function App() {
  const handleAdd = async (newBook) => {
    await fetch(`${import.meta.env.VITE_API_URL}/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBook),
    });
  };

  return (
    <div className={styles.app}>
      <h1>📚 Book Manager</h1>
      <AddBookForm onAdd={handleAdd} />
      <BookList />
    </div>
  );
}
