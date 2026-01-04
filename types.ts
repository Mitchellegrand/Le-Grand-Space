
export type PageId = 'home' | 'services' | 'how-it-works' | 'pricing' | 'about' | 'contact';

export interface NavItem {
  id: PageId;
  label: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}
