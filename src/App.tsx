import { useState } from "react";

import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";

import { TTask } from "./types/task";

export function App() {
  const [tasks, setTasks] = useState<TTask[]>([])

  return (
    <>
      <Header />
      <Tasks tasks={tasks} />
    </>
  )
}