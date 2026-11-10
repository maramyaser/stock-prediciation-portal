import { Link } from 'react-router-dom'

const bars = [34, 44, 40, 58, 50, 64, 57, 76, 68, 86, 80, 97]

export default function Main() {
  return (
    <main>
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <section className="hero page-shell">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse-dot" /> THE SMARTER WAY TO EXPLORE MARKETS</div>
          <h1>Invest in <em>insight.</em><br />Not in guesswork.</h1>
          <p>Explore stock trends, understand market signals, and prepare for smarter predictions with one beautifully simple workspace.</p>
          <div className="hero-actions">
            <Link to="/dashboard" className="button button-primary">Launch workspace <span>↗</span></Link>
            <a href="#how-it-works" className="button button-outline">See how it works <span>↓</span></a>
          </div>
          <div className="hero-proof">
            <div className="proof-icon">✦</div>
            <span>Built with machine learning, React & Django<br /><strong>Designed for curious market minds</strong></span>
          </div>
        </div>
        <div className="hero-visual" aria-label="Illustrative market analysis dashboard preview">
          <div className="visual-chip visual-chip-top"><span className="chip-dot" /> MARKET INTELLIGENCE</div>
          <div className="preview-card">
            <div className="preview-heading"><div><span className="tiny-label">YOUR ANALYTICS SPACE</span><h3>Market overview</h3></div><span className="preview-menu">•••</span></div>
            <div className="preview-meta"><span>Illustrative chart</span><span className="meta-live"><span className="pulse-dot" /> PREVIEW</span></div>
            <div className="chart-area">
              <div className="grid-lines"><span /><span /><span /><span /></div>
              <div className="bar-chart">{bars.map((v, i) => <div key={i} className={`chart-bar ${i === 9 ? 'highlight' : ''}`} style={{height: `${v}%`}} />)}</div>
              <svg className="chart-trend" viewBox="0 0 520 210" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#96f2a7" stopOpacity=".22" /><stop offset="100%" stopColor="#96f2a7" stopOpacity="0" /></linearGradient></defs><path d="M0 174 C50 165 68 187 105 155 S173 140 206 123 S268 150 312 99 S374 119 417 64 S483 72 520 20 L520 210 L0 210Z" fill="url(#chartFill)" /><path d="M0 174 C50 165 68 187 105 155 S173 140 206 123 S268 150 312 99 S374 119 417 64 S483 72 520 20" fill="none" stroke="#a9f4b8" strokeWidth="3.5" strokeLinecap="round" /></svg>
            </div>
            <div className="chart-labels"><span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span><span>MAY</span><span>JUN</span></div>
            <div className="preview-bottom"><div><span className="tiny-label">ANALYSIS</span><strong>Visualize patterns</strong></div><span className="signal-pill">✦ AI-READY</span></div>
          </div>
          <div className="visual-chip visual-chip-bottom"><span>✳</span><span>Clarity over noise</span></div>
        </div>
      </section>
      <section className="feature-section page-shell" id="how-it-works">
        <div className="section-heading"><span className="section-kicker">BUILT TO MAKE IT SIMPLE</span><h2>Everything starts with<br /><em>better perspective.</em></h2><p>A focused experience for exploring data and building a more informed market view.</p></div>
        <div className="feature-grid">
          <article className="feature-card"><div className="feature-icon">⌁</div><span className="feature-number">01 / EXPLORE</span><h3>Find the signal</h3><p>Keep your research organized in a clean, distraction-free market workspace.</p></article>
          <article className="feature-card"><div className="feature-icon">▥</div><span className="feature-number">02 / ANALYZE</span><h3>See the bigger picture</h3><p>Build a foundation for exploring historical trends and visual insights.</p></article>
          <article className="feature-card"><div className="feature-icon">✳</div><span className="feature-number">03 / PREDICT</span><h3>Powered by possibility</h3><p>A platform designed to grow into model-powered stock forecasting.</p></article>
        </div>
      </section>
      <section className="bottom-cta page-shell"><div><span className="section-kicker">YOUR NEXT MOVE</span><h2>Ready to explore <em>what's next?</em></h2><p>Open your workspace and start building your market perspective.</p></div><Link to="/dashboard" className="button button-primary">Open workspace <span>↗</span></Link></section>
    </main>
  )
}