import { useEffect, useState } from 'react'
import axiosInstance from '../../axiosInstance'

export default function Dashboard() {
  const [connection, setConnection] = useState('checking')
  const [ticker, setTicker] = useState('')
  const [selectedTicker, setSelectedTicker] = useState('')

  useEffect(() => {
    let active = true
    axiosInstance.get('/protected-view/')
      .then(() => { if (active) setConnection('connected') })
      .catch(() => { if (active) setConnection('error') })
    return () => { active = false }
  }, [])

  function handleSearch(event) {
    event.preventDefault()
    setSelectedTicker(ticker.trim().toUpperCase())
  }

  return (
    <main className="dashboard-page page-shell">
      <div className="dashboard-topline"><span className="section-kicker">YOUR WORKSPACE / OVERVIEW</span><span className={`status-label status-${connection}`}><span className="pulse-dot" /> {connection === 'connected' ? 'API CONNECTED' : connection === 'checking' ? 'CHECKING CONNECTION' : 'API UNAVAILABLE'}</span></div>
      <div className="dashboard-heading"><div><h1>Good to see you <span className="heading-spark">✳</span></h1><p>Your market research begins here. Stay curious, stay informed.</p></div><span className="dashboard-date">STOCKWISE / RESEARCH SPACE</span></div>
      <div className="workspace-grid">
        <section className="workspace-main">
          <div className="workspace-card">
            <div className="workspace-card-head"><div><span className="section-kicker">01 / DISCOVER</span><h2>Explore a stock</h2><p>Enter a ticker to begin organizing your research.</p></div><span className="card-glyph">↗</span></div>
            <form className="ticker-form" onSubmit={handleSearch}>
              <label htmlFor="stock-ticker">STOCK SYMBOL</label>
              <div className="ticker-input-row"><input id="stock-ticker" value={ticker} onChange={event => setTicker(event.target.value)} placeholder="e.g. AAPL, MSFT, TSLA" maxLength={15} required /><button type="submit" className="button button-primary">Explore <span>↗</span></button></div>
            </form>
            {selectedTicker ? <div className="ticker-result"><div className="ticker-avatar">{selectedTicker.slice(0, 2)}</div><div><strong>{selectedTicker}</strong><p>Symbol selected. Price data and prediction endpoints have not been integrated yet.</p></div><span className="result-tag">RESEARCH</span></div> : <div className="ticker-placeholder"><span className="placeholder-icon">⌕</span><div><strong>Choose your starting point</strong><p>Search for a company symbol to prepare your analysis.</p></div></div>}
          </div>
          <div className="workspace-card roadmap-card"><div className="workspace-card-head"><div><span className="section-kicker">02 / COMING NEXT</span><h2>Prediction studio</h2><p>A dedicated home for your machine-learning model.</p></div><span className="roadmap-pill">IN DEVELOPMENT</span></div><div className="roadmap-preview"><div className="roadmap-line"><span className="roadmap-number">01</span><div><strong>Connect market data</strong><p>Fetch real historical prices through a backend service.</p></div><span>○</span></div><div className="roadmap-line"><span className="roadmap-number">02</span><div><strong>Integrate the Keras model</strong><p>Serve real model results from a Django prediction endpoint.</p></div><span>○</span></div><div className="roadmap-line"><span className="roadmap-number">03</span><div><strong>Visualize outcomes</strong><p>Compare forecast and historical prices on a chart.</p></div><span>○</span></div></div></div>
        </section>
        <aside className="workspace-side"><div className="side-panel dark-panel"><span className="section-kicker">THE BIG PICTURE</span><div className="side-art">↗</div><h3>Think further.<br /><em>See clearer.</em></h3><p>Powerful insights start with asking better questions.</p></div><div className="side-panel tip-panel"><span className="tip-icon">✦</span><h3>Research, not financial advice.</h3><p>Predictions are uncertain. Verify data and evaluate risk before making investment decisions.</p></div></aside>
      </div>
    </main>
  )
}