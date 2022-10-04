import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

const TasksList = () => {
    const tasks = useSelector((state) => state.todo);
    return (
        <div>
            {tasks.map((t) => (
                <TaskItem task={t} key={t.id} />
            ))}
        </div>
    );
};

export default TasksList;