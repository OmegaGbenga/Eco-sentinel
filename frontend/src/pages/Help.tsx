import React from 'react';

export const HelpPage: React.FC = () => {
  return (
    <div className="help-center">
      <h1>How can we help?</h1>
      <div className="search-bar">
        <input type="text" placeholder="Search documentation..." style={{ padding: '1rem', width: '100%', borderRadius: '8px', border: 'none' }} />
      </div>
      <div className="faq-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '2rem' }}>
        <div className="glass-card">
          <h4>Getting Started</h4>
          <p>Learn how to connect your wallet and set up your first sensor.</p>
        </div>
        <div className="glass-card">
          <h4>Troubleshooting</h4>
          <p>Common issues and how to resolve them quickly.</p>
        </div>
        <div className="glass-card">
          <h4>API Reference</h4>
          <p>Detailed documentation for developers building on Ecosentinel.</p>
        </div>
      </div>
    </div>
  );
};
