import { test, expect } from "vitest";
import { render } from "@testing-library/react";
import BookForm from "../BookForm";

test("calls onSubmit when form is submitted", () => {
    // Arrange
    let submitted = false;
    const onSubmit = () => {
        submitted = true;
    };
    const { getByPlaceholderText, getByRole } = render(
        <BookForm onSubmit={onSubmit} />,
    );

    // Act
    getByPlaceholderText(/title/i).value = "Libro";
    getByPlaceholderText(/author/i).value = "Autor";
    getByPlaceholderText(/year/i).value = "2024";
    getByRole("button", { name: /add/i }).click();

    // Assert
    expect(submitted).toBe(true);
});
