import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export function useBooksApi() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchBooks = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(API_URL);
            const reorderedBooks = response.data.map((book) => {
                if (!book.id) return book;
                const { id, ...rest } = book;
                return { id, ...rest };
            });
            setBooks(reorderedBooks);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    const createBook = async (bookData) => {
        setLoading(true);
        setError(null);
        try {
            await axios.post(API_URL, bookData);
            await fetchBooks();
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    const deleteBook = async (id) => {
        setLoading(true);
        setError(null);
        try {
            await axios.delete(`${API_URL}/${id}`);
            await fetchBooks();
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    const updateBook = async (bookData) => {
        setLoading(true);
        setError(null);
        try {
            await axios.put(`${API_URL}/${bookData.id}`, bookData);
            await fetchBooks();
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    return {
        books,
        loading,
        error,
        fetchBooks,
        createBook,
        deleteBook,
        updateBook,
    };
}
