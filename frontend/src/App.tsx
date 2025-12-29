import React, { useState, useEffect } from 'react';
import { AppConfig, UserSession, showConnect } from '@stacks/connect';
import { ConnectWalletWC } from './components/ConnectWalletWC';
import { ChainhooksView } from './components/ChainhooksView';

const appConfig = new AppConfig(['store_write', 'publish_data']);
