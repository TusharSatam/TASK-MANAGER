export interface Task {
    id: string;
    title: string;
    completed: boolean;
    priority: 'Low' | 'Medium' | 'High';
    createdAt: Date;
  }
  