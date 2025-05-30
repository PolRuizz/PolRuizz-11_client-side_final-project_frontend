import { useState } from "react";
import AddBookForm from "./components/AddBookForm";
import BookList from "./components/BookList";
import styles from "./App.module.css";

export default function App() {
  const [refresh, setRefresh] = useState(0);

  const handleAdd = async (newBook) => {
    await fetch(`${import.meta.env.VITE_API_URL}/books`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBook),
    });
    setRefresh((prev) => prev + 1);
  };

  return (
    <div className={styles.app}>
      <h1>My Book Collection</h1>
      <AddBookForm onAdd={handleAdd} />
      <BookList refreshTrigger={refresh} />
    </div>
  );
}
