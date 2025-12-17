import type { Task, TaskFilterOptions } from '../types';

export const filterTasks = (
  tasks: Task[],
  filters: TaskFilterOptions
): Task[] => {
  return tasks.filter(task => {
    if (filters.status && task.status !== filters.status) return false;
    if (filters.priority && task.priority !== filters.priority) return false;
    if (
      filters.searchQuery &&
      !task.title.toLowerCase().includes(filters.searchQuery.toLowerCase())
    ) {
      return false;
    }
    return true;
  });
};

export const validateTask = (task: Partial<Task>) => {
  const errors: Record<string, string> = {};
  if (!task.title || task.title.trim() === '') {
    errors.title = 'Title is required';
  }
  return errors;
};
