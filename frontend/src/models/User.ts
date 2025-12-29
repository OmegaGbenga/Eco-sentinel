export interface UserProfile {
  stxAddress: string;
  domainName?: string;
  avatarUrl?: string;
  email?: string;
  bio?: string;
  createdAt: number;
  preferences: {
