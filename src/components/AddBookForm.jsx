import { useState } from "react";
import BookForm from "./BookForm";
import styles from "./AddBookForm.module.css";

export default function AddBookForm({ onAdd }) {
  const [showForm, setShowForm] = useState(false);

  const handleAdd = async (newBook) => {
    await onAdd(newBook);
    setShowForm(false);
  };

  return (
    <div className={styles.container}>
      {!showForm ? (
        <button className={styles.addButton} onClick={() => setShowForm(true)}>
          Add New Book
        </button>
      ) : (
        <BookForm onSubmit={handleAdd} onCancel={() => setShowForm(false)} />
      )}
    </div>
  );
}
