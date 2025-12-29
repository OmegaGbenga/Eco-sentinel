export const formatCurrency = (amount: number, currency = 'USD'): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  }).format(amount);
};

export const formatSTX = (microStacks: number): string => {
  return (microStacks / 1000000).toLocaleString('en-US', { 
    minimumFractionDigits: 2, 
