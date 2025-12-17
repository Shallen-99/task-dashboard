import { useEffect, useState } from 'react';
import type { Task, TaskFilterOptions } from '../../types';
import { filterTasks } from '../../utils/taskUtils';
import TaskForm from '../TaskForm/TaskForm';
import TaskFilter from '../TaskFilter/TaskFilter';
import TaskList from '../TaskList/TaskList';

const Dashboard = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filters, setFilters] = useState<TaskFilterOptions>({});

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task: Task) => {
    setTasks(prev => [...prev, task]);
  };

  const updateTask = (updatedTask: Task) => {
    setTasks(prev =>
      prev.map(task => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const visibleTasks = filterTasks(tasks, filters);

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold">Task Management Dashboard</h1>
      <TaskForm onAddTask={addTask} />
      <TaskFilter onFilterChange={setFilters} />
      <TaskList
        tasks={visibleTasks}
        onUpdateTask={updateTask}
        onDeleteTask={deleteTask}
      />
    </div>
  );
};

export default Dashboard;
