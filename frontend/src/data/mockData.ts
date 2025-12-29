export const generateMockData = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    timestamp: Date.now() - (count - i) * 3600000,
    value: Math.floor(Math.random() * 100)
  }));
};
