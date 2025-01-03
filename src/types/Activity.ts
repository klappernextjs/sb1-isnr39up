export interface Activity {
  id: string;
  type: 'mint' | 'sale' | 'transfer';
  catId: string;
  timestamp: number;
  from?: string;
  to: string;
  price?: string;
}