import React, { useState } from 'react';

interface Props {
  onFilterChange: (filter: { priority: string; status: string }) => void;
}

const FilterOptions: React.FC<Props> = ({ onFilterChange }) => {
  const [priority, setPriority] = useState('All');
  const [status, setStatus] = useState('All');

  const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedPriority = e.target.value;
    setPriority(selectedPriority);
    onFilterChange({ priority: selectedPriority, status });
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedStatus = e.target.value;
    setStatus(selectedStatus);
    onFilterChange({ priority, status: selectedStatus });
  };

  return (
    <div className="flex gap-4 mb-4">
      <select
        value={priority}
        onChange={handlePriorityChange}
        className="border p-2 rounded w-full"
      >
        <option value="All">All Priorities</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

      <select
        value={status}
        onChange={handleStatusChange}
        className="border p-2 rounded w-full"
      >
        <option value="All">All Statuses</option>
        <option value="Completed">Completed</option>
        <option value="Incomplete">Incomplete</option>
      </select>
    </div>
  );
};

export default FilterOptions;
