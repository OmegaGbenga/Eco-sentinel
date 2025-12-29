export interface Block {
  height: number;
  hash: string;
  parentHash: string;
  timestamp: number;
  txCount: number;
  miner: string;
  reward: number;
  difficulty: number;
