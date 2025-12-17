import type { Task } from '../../types';

interface Props {
  task: Task;
  onUpdate: (task: Task) => void;
  onDelete: (id: string) => void;
}

const TaskItem = ({ task, onUpdate, onDelete }: Props) => {
  const toggleStatus = () => {
    onUpdate({
      ...task,
      status: task.status === 'completed' ? 'pending' : 'completed',
    });
  };

  return (
    <li className="border p-2 flex justify-between items-center">
      <div>
        <h3 className="font-semibold">{task.title}</h3>
        <p className="text-sm text-gray-500">{task.priority}</p>
      </div>

      <div className="flex gap-2">
        <button onClick={toggleStatus} className="text-green-600">
          ✓
        </button>
        <button onClick={() => onDelete(task.id)} className="text-red-600">
          ✕
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
