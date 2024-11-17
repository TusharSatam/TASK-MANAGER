import React, { useState } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import SearchBar from './components/SearchBar';
import FilterOptions from './components/FilterOptions';
import { Task } from './types/Task';
import { v4 as uuidv4 } from 'uuid';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggleButton from './components/ThemeToggleButton';

const App: React.FC = () => {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', []);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>(tasks);

  const addTask = (title: string, priority: 'Low' | 'Medium' | 'High') => {
    const newTask: Task = {
      id: uuidv4(),
      title,
      completed: false,
      priority,
      createdAt: new Date(),
    };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  const deleteTask = (id: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  const toggleCompletion = (id: string) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  const handleSearch = (searchTerm: string) => {
    const searchResults = tasks.filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTasks(searchResults);
  };

  const handleFilterChange = (filter: { priority: string; status: string }) => {
    let filtered = tasks;
    if (filter.priority !== 'All') {
      filtered = filtered.filter((task) => task.priority === filter.priority);
    }
    if (filter.status !== 'All') {
      const isCompleted = filter.status === 'Completed';
      filtered = filtered.filter((task) => task.completed === isCompleted);
    }
    setFilteredTasks(filtered);
  };

  return (
    <ThemeProvider>
    <div className="container mx-auto p-4">
      <div className='flex justify-end items-center mb-10'>
    <ThemeToggleButton />
      </div>
      <h1 className="text-2xl mb-4">Task Manager</h1>
      <TaskInput onAddTask={addTask} />
      <SearchBar onSearch={handleSearch} />
      <FilterOptions onFilterChange={handleFilterChange} />
      <TaskList tasks={filteredTasks} onDelete={deleteTask} onToggleCompletion={toggleCompletion} />
    </div>
    </ThemeProvider>
  );
};

export default App;
