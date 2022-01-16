import { useContext } from "react";
import { TasksContext } from "./App";

export default function TaskList() {
  const { tasks } = useContext(TasksContext);

  return (
    <ul style={{ marginTop: "1em" }}>
      {tasks.map((task) => (
        <li
          style={{ listStyle: "none", display: "flex", alignItems: "baseline" }}
        >
          <input type="checkbox" />
          <p style={{ marginLeft: "1em" }}>{task}</p>
        </li>
      ))}
    </ul>
  );
}
