import React, { useState } from 'react';

interface Props {
  onAddTask: (title: string, priority: 'Low' | 'Medium' | 'High') => void;
}

const TaskInput: React.FC<Props> = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState<'Low' | 'Medium' | 'High'>('Low');

  const handleAddTask = () => {
    if (title.trim()) {
      onAddTask(title, priority);
      setTitle('');
    }
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        className="border p-2 rounded w-full"
        type="text"
        placeholder="Add a task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select
        className="border p-2 rounded"
        value={priority}
        onChange={(e) => setPriority(e.target.value as 'Low' | 'Medium' | 'High')}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button className="bg-blue-500 text-white p-2 rounded" onClick={handleAddTask}>
        Add
      </button>
    </div>
  );
};

export default TaskInput;
