import '../styles/portfolio.css';
import '../styles/hero.css'

export default function Hero() {
  return (
    <section className="ae-hero">
      <div className="row">
        <div className="col-12 col-md-8">
          <h1 className="ae-hero-title">Software<br />Engineer &lt;/&gt;</h1>
          <p className="ae-hero-sub">Creating responsive, user-focused, and modern web solutions.</p>
        </div>
      </div>
      <div className="ae-vertical">Portfolio</div>
    </section>
  );
}