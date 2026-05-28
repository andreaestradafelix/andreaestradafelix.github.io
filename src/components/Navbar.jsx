import { useState } from 'react';
import '../styles/navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className="ae-nav-container">
      <nav className="ae-nav">
        <a href="#" className="ae-brand">ANDREA ESTRADA</a>
        <div className="ae-nav-links">
          <a href="#about">about</a>
          <a href="#work">work</a>
          <a href="#contact">contact</a>
        </div>
        <button className="ae-hamburger" onClick={() => setOpen(o => !o)}>
          {open ? '✕' : '☰'}
        </button>
      </nav>

      <div className={`ae-mobile-menu${open ? ' open' : ''}`}>
        <a href="#about"   onClick={close}>about</a>
        <a href="#work"    onClick={close}>work</a>
        <a href="#contact" onClick={close}>contact</a>
      </div>
    </div>
  );
}
