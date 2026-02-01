import React from 'react'

export default function HeaderTabs({ counts = {}, active = 'recent', onChange }) {
  return (
    <div className="ch-tabs">
      <div className={`tab ${active === 'recent' ? 'active' : ''}`} onClick={() => onChange('recent')}>
        <div className="tab-count">{counts.recent ?? 0}</div>
        <div className="tab-label">Recent-e-Filing</div>
      </div>
      <div className={`tab ${active === 'recent-e' ? 'active' : ''}`} onClick={() => onChange('recent-e')}>
        <div className="tab-count">{counts.recentE ?? 0}</div>
        <div className="tab-label">Recent-e-Filing</div>
      </div>
      <div className={`tab ${active === 'referrals' ? 'active' : ''}`} onClick={() => onChange('referrals')}>
        <div className="tab-count">{counts.referrals ?? 0}</div>
        <div className="tab-label">e-Referrals</div>
      </div>

      <div className="tab-actions">
        <button className="btn action">Print</button>
        <button className="btn action">Export</button>
      </div>
    </div>
  )
}
