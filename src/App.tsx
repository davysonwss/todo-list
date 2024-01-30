import { useState } from "react";
import { v4 as uuid } from "uuid";

import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";

import { TTask } from "./types/task";

export function App() {
  const [tasks, setTasks] = useState<TTask[]>([])

  function addTask(taskName: string) {
    setTasks((state) => [...state, {
      id: uuid(),
      name: taskName,
      isCompleted: false
    }])
  }

  function deleteTask(taskId: string) {
    const newTasks = tasks.filter(task => task.id !== taskId)

    setTasks(newTasks)
  }

  function toggleTaskCompleted(taskId: string) {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task, isCompleted: !task.isCompleted
        }
      }
      return task
    })

    setTasks(newTasks)
  }

  return (
    <>
      <Header onAddTask={addTask} />
      <Tasks
        tasks={tasks}
        onDelete={deleteTask}
        onComplete={toggleTaskCompleted} />
    </>
  )
}