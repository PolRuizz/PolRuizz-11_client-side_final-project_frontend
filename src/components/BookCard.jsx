import styles from "./BookCard.module.css";

export default function BookCard({ book, onEdit, onDelete }) {
  // Normaliza el estado para mostrar "pending" si es "completed"
  const status =
    book.status === "completed" ? "pending" : book.status;

  let statusClass = styles.statusPending;
  if (status === "read") {
    statusClass = styles.statusRead;
  } else if (status === "in progress") {
    statusClass = styles.statusProgress;
  }

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.title}>{book.title}</div>
        <div className={styles.year}>{book.year}</div>
      </div>
      <hr className={styles.divider} />
      <div className={styles.statusContainer}>
        <span className={`${styles.status} ${statusClass}`}>
          {status}
        </span>
      </div>
      <hr className={styles.divider} />
      <div className={styles.actions}>
        <button
          className={styles.edit}
          onClick={() => onEdit(book)}
          type="button"
        >
          Edit
        </button>
        <button
          className={styles.delete}
          onClick={() => onDelete(book.id)}
          type="button"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

