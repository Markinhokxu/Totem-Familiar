export type Member = 'Todos' | 'Pai' | 'Mãe' | 'Filho' | 'Filha';

export interface Profile {
  id: string;
  name: string;
  role: Member;
  avatar: string;
}

export interface ShoppingItem {
  id: string;
  name: string;
  quantity: number;
  category: string;
  completed: boolean;
  assignedTo?: Member;
}

export interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  assignedTo: Member;
  category: string;
}