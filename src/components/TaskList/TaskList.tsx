import type { Task } from '../../types';
import TaskItem from './TaskItem';

interface Props {
  tasks: Task[];
  onUpdateTask: (task: Task) => void;
  onDeleteTask: (id: string) => void;
}

const TaskList = ({ tasks, onUpdateTask, onDeleteTask }: Props) => {
  if (tasks.length === 0) {
    return <p>No tasks found.</p>;
  }

  return (
    <ul className="space-y-2">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onUpdate={onUpdateTask}
          onDelete={onDeleteTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
