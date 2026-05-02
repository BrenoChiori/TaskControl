import Task from './components/Task'
import AddTask from './components/AddTask'
import { useEffect, useState } from 'react'
import { v4 } from "uuid";
import Title from './components/Title';

type Task = {
  id: string;
  title: string;
  description: string;
  isComplete: boolean;
};

function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    try {
      const stored = localStorage.getItem("tasks");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function onTaskClick(taskId: string) {
    const updatedTasks = tasks.map(task =>
      task.id === taskId
        ? { ...task, isComplete: !task.isComplete }
        : task
    );

    setTasks(updatedTasks);
  }

  function onDeleteTaskClick(taskId: string) {
    const filteredTasks = tasks.filter(task => task.id !== taskId);
    setTasks(filteredTasks);
  }

  function onAddTaskSubmit(title: string, description: string) {
    const newTask: Task = {
      id: v4(),
      title,
      description,
      isComplete: false
    };

    setTasks(prev => [...prev, newTask]);
  }

  return (
    <div className='w-screen h-screen bg-slate-500 flex justify-center p-6'>
      <div className='w-[500px] space-y-4'>
        <Title>Gerenciador de Tarefas</Title>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Task 
          tasks={tasks} 
          onTaskClick={onTaskClick} 
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App
