import { FaRegCircle, FaRegCheckCircle, FaWindowClose } from 'react-icons/fa';

const TaskItem = (props) => {
const { task, toggleTask, deleteTask } = props;

return (
    <div class="flex mb-4 items-center">
        <p className={"w-full rounded p-1 border-2 text-white " + (task.done ? 'bg-lime-500 border-lime-500 text-green-600 italic' : 'bg-orange-500 border-orange-500')}>{task.text}</p>        
        <button onClick={() => toggleTask(task.id)} 
            className={"flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white " + (task.done ? 'text-green-500 border-green-500 hover:bg-green-500':'text-orange-500 border-orange-500 hover:bg-orange-500')}
        >
            {task.done ? <FaRegCheckCircle /> : <FaRegCircle />}
        </button>
        <button onClick={() => deleteTask(task.id)} className="flex-no-shrink p-2 ml-2 border-2 rounded border-red-600 text-red-600 border-red hover:text-white hover:bg-red-600">
            <FaWindowClose />
        </button>
    </div>
);
};

export default TaskItem;