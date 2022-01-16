import "./styles.css";
import React, { createContext, useContext, useEffect, useState } from "react";
import TaskList from "./TaskList";
import AddTask from "./AddTask";
import Header from "./Header";
import { Card, Container } from "react-bootstrap";

export const TasksContext = createContext();
export const UserContext = createContext();

const names = ["Jonah", "Mateo", "Amy", "Glenn", "Dina"];

export default function App() {
  const [tasks, setTasks] = useState([
    "Mopping Aisle nine",
    "Supervise Chayenne how to do inventory",
    "Buy flowers for Jerusha"
  ]);
  const [user, setUser] = useState({
    name: names[Math.floor(Math.random() * names.length)]
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    if (tasks.length < 1)
      setTasks(JSON.parse(localStorage.getItem("tasks")) ?? []);
  }, []);

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      <Container
        style={{
          border: "1px solid black",
          margin: "10em auto",
          borderRadius: "25px",
          padding: "2em",
          flexDirection: "row"
        }}
      >
        <div style={{ flexDirection: "column", width: "50%" }}>
          <UserContext.Provider value={{ user }}>
            <Header subtitle={"Those are your todays tasks:"} />
          </UserContext.Provider>
          <AddTask />
        </div>
        <TaskList />
      </Container>
    </TasksContext.Provider>
  );
}
