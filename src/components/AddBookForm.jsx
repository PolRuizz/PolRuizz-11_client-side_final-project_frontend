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
            {showForm ? (
                <div className={styles.formWrapper}>
                    <BookForm onSubmit={handleAdd} />
                    <p className={styles.linkLine}>
                        <button
                            type="button"
                            className={styles.cancelButton}
                            onClick={() => setShowForm(false)}
                        >
                            Cancel
                        </button>
                    </p>
                </div>
            ) : (
                <p className={styles.linkLine}>
                    <button
                        type="button"
                        className={styles.cancelButton}
                        onClick={() => setShowForm(true)}
                    >
                        Add New Book
                    </button>
                </p>
            )}
        </div>
    );
}
