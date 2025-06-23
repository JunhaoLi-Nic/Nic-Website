import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Explanation:
// ReactDOM.createRoot is used to enable the new React 18 root API, which allows for improved performance and features like concurrent rendering. 
// It replaces the older ReactDOM.render method and is required for using React 18's new features.

// The root element is the HTML element that React will manage. 
// In this case, it's the div with the id "root" in the index.html file.

// The App component is the root component of the application. 
// It is the top-level component that will be rendered to the root element.

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode> is a wrapper component that helps highlight potential problems in an application. 
  // It activates additional checks and warnings for its descendants, helping developers write better React code.
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
