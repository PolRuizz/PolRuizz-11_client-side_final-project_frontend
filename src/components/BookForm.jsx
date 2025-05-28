import { useState, useEffect } from "react";
import styles from "./BookForm.module.css";

const INITIAL_STATE = {
  title: "",
  author: "",
  year: "",
  status: "pending",
};

export default function BookForm({ onSubmit, initialData, onCancel }) {
  const [formData, setFormData] = useState(INITIAL_STATE);

  useEffect(() => {
    if (initialData) setFormData(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "year" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    if (!initialData) setFormData(INITIAL_STATE);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
      <input type="text" name="author" placeholder="Author" value={formData.author} onChange={handleChange} required />
      <input type="number" name="year" placeholder="Year" value={formData.year} onChange={handleChange} required />
      <select name="status" value={formData.status} onChange={handleChange}>
        <option value="pending">Pending</option>
        <option value="in progress">In Progress</option>
        <option value="read">Read</option>
      </select>
      <div className={styles.actions}>
        <button type="submit" className={styles.submit}>
          {initialData ? "Update" : "Add Book"}
        </button>
        {initialData && <button type="button" className={styles.cancel} onClick={onCancel}>Cancel</button>}
      </div>
    </form>
  );
}
