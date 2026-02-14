
export interface Skill {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface Experience {
  id: string;
  position: string;
  company: string;
  location: string;
  duration: string;
  type: 'Full-time' | 'Internship';
  responsibilities: string[];
  categories?: {
    name: string;
    items: string[];
  }[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  badge?: string;
  achievements: string[];
}

export interface Certification {
  id: string;
  name: string;
}

export enum Language {
  ENGLISH = 'EN',
  HINDI = 'HI',
  GUJARATI = 'GJ'
}
