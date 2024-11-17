import React from 'react';
import { Task } from '../types/Task';

interface Props {
  task: Task;
  onDelete: (id: string) => void;
  onToggleCompletion: (id: string) => void;
}

const TaskItem: React.FC<Props> = ({ task, onDelete, onToggleCompletion }) => {
  return (
    <div className="task-appear p-3 mb-2 rounded-lg flex justify-between items-center border hover:shadow-md transition-all">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleCompletion(task.id)}
          className="cursor-pointer"
        />
        <span
          className={`task-itemm-title  ${
            task.completed ? 'line-through !text-gray-400' : 'text-gray-900'
          }`}
        >
          {task.title}
        </span>
      </div>
      <div className="flex gap-2">
        <span className={`task-prio text-sm px-2 py-1 rounded ${task.priority} ${task.priority==="Low"?"text-green-600":task.priority==="Medium"?"text-yellow-600":"text-red-600"}`}>
          {task.priority}
        </span>
        <button
          onClick={() => onDelete(task.id)}
          className="text-red-500 hover:text-red-600 transition-colors"
        >
          ❌
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
