export function getRarityStyles(rarity: string): string {
  switch (rarity) {
    case 'legendary':
      return 'bg-yellow-100 text-yellow-800';
    case 'epic':
      return 'bg-purple-100 text-purple-800';
    case 'rare':
      return 'bg-blue-100 text-blue-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}

export function getActivityTypeStyles(type: string): string {
  switch (type) {
    case 'mint':
      return 'bg-green-100 text-green-800';
    case 'sale':
      return 'bg-blue-100 text-blue-800';
    case 'transfer':
      return 'bg-purple-100 text-purple-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}