import React from 'react';

interface Transaction {
  id: string;
  hash: string;
  status: 'pending' | 'success' | 'failed';
  amount: string;
}

