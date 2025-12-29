import React, { useState, useEffect } from 'react';
import { AppConfig, UserSession, showConnect } from '@stacks/connect';
import { ConnectWalletWC } from './components/ConnectWalletWC';
import { ChainhooksView } from './components/ChainhooksView';

const appConfig = new AppConfig(['store_write', 'publish_data']);
const userSession = new UserSession({ appConfig });

function App() {
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then((userData) => {
        setUserData(userData);
      });
    } else if (userSession.isUserSignedIn()) {
      setUserData(userSession.loadUserData());
    }
  }, []);

  const connectWallet = () => {
    showConnect({
      appDetails: { name: 'Ecosentinel', icon: window.location.origin + '/vite.svg' },
      redirectTo: '/',
      onFinish: () => window.location.reload(),
      userSession,
    });
  };

  const disconnect = () => {
    userSession.signUserOut('/');
    setUserData(null);
  };

  return (
    <div className="app-container">
       <div className="gradient-bg" />
       <nav style={{ padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', backdropFilter: 'blur(10px)', background: 'rgba(0,0,0,0.3)' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Ecosentinel</div>
          <div>
            {!userData && <button onClick={connectWallet}>Stx Connect</button>}
            {userData && <button onClick={disconnect}>Disconnect</button>}
          </div>
       </nav>
       <main style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
          <h1>Dashboard</h1>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
             <ConnectWalletWC />
             <ChainhooksView />
          </div>
       </main>
    </div>
  );
