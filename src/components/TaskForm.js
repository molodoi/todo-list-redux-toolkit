import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/redux";

const TaskForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTask(text));
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 bg-white text-grey-darker"
        type="text"
        placeholder="Ajouter une tâche"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
};

export default TaskForm;