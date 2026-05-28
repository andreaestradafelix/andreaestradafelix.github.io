import { tickerItems } from '../data/portfolioData';
import '../styles/portfolio.css';

const items = [...tickerItems, ...tickerItems];

export default function Ticker() {
  return (
    <div className="ae-ticker">
      <div className="ae-ticker-inner">
        {items.map((item, i) => (
          <span key={i}>{item} &nbsp;&nbsp;·&nbsp;&nbsp;</span>
        ))}
      </div>
    </div>
  );
}
