import React from 'react';

interface DataPoint {
  timestamp: number;
  value: number;
}

export const DataChart: React.FC<{ data: DataPoint[], title: string }> = ({ data, title }) => {
