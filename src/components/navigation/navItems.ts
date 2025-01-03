import { Home, PlusCircle, Store, TrendingUp, User } from 'lucide-react';

export const navItems = [
  { to: '/', icon: Home, label: 'Home' },
  { to: '/generate', icon: PlusCircle, label: 'Generate' },
  { to: '/marketplace', icon: Store, label: 'Marketplace' },
  { to: '/activity', icon: TrendingUp, label: 'Activity' },
  { to: '/profile', icon: User, label: 'Profile' }
] as const;