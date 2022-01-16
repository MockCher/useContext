import { useContext, useState } from "react";
import { TasksContext } from "./App";
import TaskList from "./TaskList";

export default function AddTask() {
  const [task, setTask] = useState();
  const { tasks, setTasks } = useContext(TasksContext);
  return (
    <>
      <input value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={() => setTasks([...tasks, task])}>+</button>
    </>
  );
}
