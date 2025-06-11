import styles from "./BookCard.module.css";

export default function BookCard({ book, onEdit, onDelete }) {
    const status = book.status === "completed" ? "pending" : book.status;

    let statusClass = styles.bookCard__statusPending;
    if (status === "read") {
        statusClass = styles.bookCard__statusRead;
    } else if (status === "in progress") {
        statusClass = styles.bookCard__statusProgress;
    }

    return (
        <div className={styles.bookCard__card}>
            <div className={styles.bookCard__header}>
                <div className={styles.bookCard__title}>{book.title}</div>
                <div className={styles.bookCard__year}>{book.year}</div>
            </div>
            <hr className={styles.bookCard__divider} />
            <div className={styles.bookCard__statusContainer}>
                <span className={`${styles.bookCard__status} ${statusClass}`}>
                    {status}
                </span>
            </div>
            <hr className={styles.bookCard__divider} />
            <div className={styles.bookCard__actions}>
                <button
                    className={styles.bookCard__edit}
                    onClick={() => onEdit(book)}
                    type="button"
                >
                    Edit
                </button>
                <button
                    className={styles.bookCard__delete}
                    onClick={() => onDelete(book.id)}
                    type="button"
                >
                    Delete
                </button>
            </div>
        </div>
    );
}
