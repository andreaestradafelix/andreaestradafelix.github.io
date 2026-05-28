import '../styles/portfolio.css';
import '../styles/footer.css';


export default function Footer() {
  return (
    <footer className="ae-footer">
      <div className="ae-footer-icons">
        <a href="https://www.linkedin.com/in/andreaestradafelix/" target="_blank" rel="noreferrer">
          <i className="bi bi-linkedin" />
        </a>
        <a href="https://github.com/andreaestradafelix" target="_blank" rel="noreferrer">
          <i className="bi bi-github" />
        </a>
        <a href="mailto:andreaestradafelix@gmail.com">
          <i className="bi bi-envelope" />
        </a>
      </div>
      <p>© 2026 andrea estrada</p>
    </footer>
  );
}