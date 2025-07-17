import  { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setViewportHeight();
    window.addEventListener('resize', setViewportHeight);
    return () => window.removeEventListener('resize', setViewportHeight);
  }, []);

  return (
    <div className="app-container">
      <header className="header">Header</header>
      <footer className="footer">Footer</footer>
    </div>
  );
}

export default App;
