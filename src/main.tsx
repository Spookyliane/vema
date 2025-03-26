import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Add intersection observer polyfill for older browsers
if (!('IntersectionObserver' in window)) {
  console.log('IntersectionObserver is not available in this browser');
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);