import { ReactNode } from 'react';

export interface CardItem {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface TechSpec {
  category: string;
  details: {
    name: string;
    value: string;
  }[];
}

export interface VersionInfo {
  version: string;
  codename: string;
  date: string;
  updates: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}
