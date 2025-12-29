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
