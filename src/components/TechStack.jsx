import { techStack } from '../data/portfolioData';
import '../styles/projects.css';
import '../styles/techStack.css';

const categories = [
  { label: 'Frontend & UX/UI', key: 'frontend' },
  { label: 'Backend',          key: 'backend'  },
  { label: 'Database',         key: 'database' },
  { label: 'Tools',            key: 'tools'    },
];

export default function TechStack() {
  return (
    <section className="ae-projects">
      <div className="ae-proj-inner">
        <h2>Technology Stack</h2>
        <hr />
        <div className="ae-tech-grid">
          {categories.map(({ label, key }) => (
            <div key={key} className="ae-tech-row">
              <p className="ae-cat">{label}</p>
              <ul className="ae-tlist">
                {techStack[key].map(t => <li key={t}>{t}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
