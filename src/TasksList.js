import TaskItem from "./TaskItem";

const TasksList = (props) => {
  return (
    <div>
      {props.tasks.map((t) => (
        <TaskItem
          task={t}
          key={t.id}
          toggleTask={props.toggleTask}
          deleteTask={props.deleteTask}
        />
      ))}
    </div>
  );
};

export default TasksList;