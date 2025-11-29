export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
  earnings?: string;
  platform?: 'Upwork' | 'Fiverr' | 'LinkedIn';
}

export interface CurriculumItem {
  week: number;
  title: string;
  topics: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface NicheItem {
  title: string;
  description: string;
  avgEarnings: string;
  icon: string;
  tasks: string[];
}