import '../styles/available.css';

export default function Available() {
  const handleDownload = () => {
    const a = document.createElement('a');
    a.href = '/cv/CV_ANDREA_ESTRADA_FELIX.pdf';
    a.download = 'CV_ANDREA_ESTRADA_FELIX.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="ae-avail">
      <h3>Available for freelance &amp; junior opportunities</h3>
      <p className="ae-avail-loc">
        <i className="bi bi-geo-alt" /> Based in Mexico &nbsp;·&nbsp; Open to work
      </p>
      <div className="ae-avail-btns">
        <div className="ae-avail-btn-wrap">
          <div className="ae-avail-btn-shadow" />
          <button className="ae-avail-btn" onClick={() => document.getElementById('work').scrollIntoView({ behavior: 'smooth' })}>
            View Projects
          </button>
        </div>
        <div className="ae-avail-btn-wrap">
          <div className="ae-avail-btn-shadow" />
          <button className="ae-avail-btn" onClick={handleDownload}>
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}
