# Nic - Personal Portfolio Website
www.nicholasli.site

This is a personal portfolio website built with Vite, React, and TypeScript. It includes a React frontend and a Node.js backend for handling email functionality.

## Project Structure

- `my-react-website/`: Frontend application built with React, TypeScript, and Vite
- `my-node-project/`: Backend server for handling email functionality

## Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

## Frontend Setup (my-react-website)

### Installation

```bash
cd my-react-website
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

This will start the development server at http://localhost:5173 (or another available port).

### Build for Production

```bash
npm run build
```

This will generate optimized production files in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

### Run Tests

```bash
npm test
```

## Backend Setup (my-node-project)

### Installation

```bash
cd my-node-project
npm install
```

### Environment Variables

Create a `.env` file in the `my-node-project` directory with the following variables:

```
PORT=5000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

Note: For Gmail, you'll need to use an App Password instead of your regular password.

### Development

```bash
npm run dev
```

This will start the server with hot reloading at http://localhost:5000.

### Build for Production

```bash
npm run build
```

This compiles TypeScript files to JavaScript in the `dist` directory.

### Start Production Server

```bash
npm start
```

## Deployment

For deployment, you'll need to:

1. Build the frontend (`cd my-react-website && npm run build`)
2. Build the backend (`cd my-node-project && npm run build`)
3. Deploy the frontend static files from `my-react-website/dist`
4. Deploy the backend, ensuring environment variables are properly set

## Technologies Used

- Frontend:
  - React
  - TypeScript
  - Vite
  - React Router
  - EmailJS
  - Spline Tool
  - GitHub Calendar
  - PDF.js

- Backend:
  - Node.js
  - Express
  - TypeScript
  - Nodemailer
  - CORS

