import "./Header.css";

export default function Header({ nav, cur }) {
  return (
    <header className="header">
      <h1 className="header__name" onClick={() => nav("home")}>
        ANDREA ESTRADA
      </h1>
      <nav className="header__nav">
        {["work", "about", "contact"].map(p => (
          <span
            key={p}
            onClick={() => nav(p)}
            className={`header__link ${cur === p ? "header__link--active" : ""}`}
          >
            {p}
          </span>
        ))}
      </nav>
    </header>
  );
}