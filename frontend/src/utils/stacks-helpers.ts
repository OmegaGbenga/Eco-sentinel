export const truncateAddress = (addr: string) => `${addr.slice(0,6)}...${addr.slice(-4)}`;
export const nanoToStx = (nano: number) => nano / 1000000;
