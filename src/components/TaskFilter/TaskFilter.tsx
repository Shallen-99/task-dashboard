import type { TaskFilterOptions } from '../../types';

interface Props {
  onFilterChange: (filters: TaskFilterOptions) => void;
}

const TaskFilter = ({ onFilterChange }: Props) => {
  return (
    <div className="flex gap-2">
      <input
        placeholder="Search tasks..."
        className="border p-2 flex-1"
        onChange={e =>
          onFilterChange({ searchQuery: e.target.value })
        }
      />

      <select
        className="border p-2"
        onChange={e =>
          onFilterChange({ status: e.target.value as any })
        }
      >
        <option value="">All</option>
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  );
};

export default TaskFilter;
