import React, { useState } from 'react';
import { Task } from '../types/Task';
import TaskItem from './TaskItem';

interface Props {
  tasks: Task[];
  onDelete: (id: string) => void;
  onToggleCompletion: (id: string) => void;
}

const TaskList: React.FC<Props> = ({ tasks, onDelete, onToggleCompletion }) => {
  const [deletedTask, setDeletedTask] = useState('');

  const handleDelete = (id: string) => {
    setDeletedTask(id);
    setTimeout(() => onDelete(id), 300);
  };

  return (
    <div>
      {tasks.map((task) => (
        <div
          key={task.id}
          className={`${
            deletedTask === task.id ? 'task-disappear' : ''
          }`}
        >
          <TaskItem
            task={task}
            onDelete={handleDelete}
            onToggleCompletion={onToggleCompletion}
          />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
