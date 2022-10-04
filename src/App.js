import { useState } from "react";
import TaskForm from "./TaskForm";
import TasksHeader from "./TasksHeader";
import TasksList from "./TasksList";
import "./reset.css";
import "./app.css";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Faire les courses", done: false },
    { id: 2, text: "Ménage !", done: true },
  ]);

  const addTask = (text) => {
    const newTask = {
      text,
      id: Date.now(),
      done: false,
    };

    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((t) => t.id !== id);
    setTasks(filteredTasks);
  };

  const toggleTask = (id) => {
    const realTask = tasks.find((t) => t.id === id);
    const index = tasks.findIndex((t) => t.id === id);
    const taskCopy = { ...realTask };
    const tasksListCopy = [...tasks];

    taskCopy.done = !taskCopy.done;
    tasksListCopy[index] = taskCopy;
    setTasks(tasksListCopy);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-slate-50">
        <div className="p-6 w-full lg:w-3/4 lg:max-w-lg">
            <TasksHeader tasks={tasks} />
            <TasksList
              tasks={tasks}
              toggleTask={toggleTask}
              deleteTask={deleteTask}
            />
            <footer>
              <TaskForm addTask={addTask} />
            </footer>
        </div>
    </div>
  );
}

export default App;
