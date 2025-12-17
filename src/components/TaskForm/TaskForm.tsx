import { useState } from 'react';
import type { Task, TaskFormData } from '../../types';
import { validateTask } from '../../utils/taskUtils';
import { v4 as uuid } from 'uuid';

interface Props {
  onAddTask: (task: Task) => void;
}

const TaskForm = ({ onAddTask }: Props) => {
  const [formData, setFormData] = useState<TaskFormData>({
    title: '',
    description: '',
    status: 'pending',
    priority: 'medium',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateTask(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    onAddTask({
      ...formData,
      id: uuid(),
    });

    setFormData({
      title: '',
      description: '',
      status: 'pending',
      priority: 'medium',
    });

    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Task title"
        className="border p-2 w-full"
      />
      {errors.title && <p className="text-red-500">{errors.title}</p>}

      <select
        name="priority"
        value={formData.priority}
        onChange={handleChange}
        className="border p-2 w-full"
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
