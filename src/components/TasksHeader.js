import { useSelector } from "react-redux";
const TasksHeader = () => {
    const tasks = useSelector((state) => state.todo);
    const undoneTasks = tasks.filter((t) => t.done === false);

    return (
        <header className="mb-4 font-bold text-center">
            <h1 className="rounded p-2 text-white bg-gray-500 mb-2">React Todo List</h1>
            <p className="rounded p-2 text-white bg-orange-500">
                Tâches à faire : <strong>{undoneTasks.length}</strong>
            </p>
        </header>
    );
};

export default TasksHeader;