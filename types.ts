
export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface GalleryItem {
  id: number;
  imageUrl: string;
  title: string;
}

export interface StepItem {
  id: number;
  title: string;
  description: string;
  iconName: 'Car' | 'DollarSign' | 'PenTool' | 'Activity';
}


export type Language = 'en' | 'ru' | 'he';
