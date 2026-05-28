
import { tickerItems } from '../data/portfolioData';
import Available from './Available';
import '../styles/portfolio.css';

export default function WhatIBuild() {
  return (
    <section className="ae-build">
      <h2>What I Build</h2>
      <p className="ae-build-items">{tickerItems.join(' · ')}</p>
      <Available />
    </section>
  );
}
