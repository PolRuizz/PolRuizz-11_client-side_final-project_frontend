import styles from "./BookCard.module.css";

export default function BookCard({ book, onEdit, onDelete }) {
  return (
    <div className={styles.card}>
      <h3>{book.title}</h3>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Year:</strong> {book.year}</p>
      <p><strong>Status:</strong> {book.status}</p>
      <div className={styles.actions}>
        <button onClick={() => onEdit(book)} className={styles.edit}>Edit</button>
        <button onClick={() => onDelete(book.id)} className={styles.delete}>Delete</button>
      </div>
    </div>
  );
}

