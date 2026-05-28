import { projects } from '../data/portfolioData';
import '../styles/projects.css';

export default function Projects() {
  return (
    <section className="ae-projects" id="work">
      <div className="ae-proj-inner">
        <h2>Work and Projects</h2>
        <hr />
        {projects.map(p => (
          <div key={p.num} className="ae-proj">
            <div><span className="pn">{p.num}.</span><a className="pt" href={p.url} target="_blank" rel="noreferrer">{p.name}</a></div>
            <div className="ps">{p.tech}</div>
          </div>
        ))}
      </div>
    </section>
  );
}