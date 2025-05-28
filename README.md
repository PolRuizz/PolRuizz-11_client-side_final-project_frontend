# Book Management Application

A React application for managing your book collection. Built with React and Vite.

## Features

- View your book collection in a card-based layout
- Add new books with title, author, year, and reading status
- Edit existing book information
- Delete books from your collection
- Responsive design for all screen sizes

## Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/yourusername/11_client-side_final-project_frontend.git
cd 11_client-side_final-project_frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following content:
```
VITE_API_URL=http://localhost:3000
```

4. Start the development server:
```bash
npm run dev
```

5. In a separate terminal, start the json-server:
```bash
npx json-server --watch db.json
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests
- `npm run lint` - Run linter

## Environment Variables

The application uses the following environment variables:

- `VITE_API_URL` - URL of the json-server backend (default: http://localhost:3000)

## Testing

The application includes unit tests for components. Run the tests with:

```bash
npm run test
```

## Production Deployment

The application is deployed on Netlify. You can view it at: [Your Netlify URL]

## Author

[Your Name]

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
