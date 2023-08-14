import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from the correct location
import App from './App';
import { ThemeProvider } from './ThemeContext';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
