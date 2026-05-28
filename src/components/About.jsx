import '../styles/portfolio.css';
import '../styles/about.css';

export default function About() {
  return (
    <section className="ae-about" id="about">
      <div className="ae-about-inner">

        <div className="ae-about-text">
          <p className="ae-hey">Hello!</p>
          <h1 className="ae-about-h1">I'm Andrea</h1>
          <p className="ae-about-p">
            Junior Full Stack Developer with a Software Engineering background
            and knowledge of the full application development lifecycle.
          </p>
          <p className="ae-about-p">
            Passionate about building clean, functional, and results-driven solutions,
            with a focus on creating responsive and user-friendly interfaces.
            Quick to adapt to new technologies, proactive in problem-solving,
            and committed to continuous learning and teamwork.
          </p>
        </div>

        <div className="ae-about-photo">
          <div className="ae-photo-wrap">
            <div className="ae-photo-shadow" />
            <div className="ae-photo">
              <img src="/images/me.jpeg" alt="Andrea Estrada" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
