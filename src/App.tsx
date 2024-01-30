import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";

import { TTask } from "./types/task";

const LOCAL_STORAGE_KEY = '@todo-app:tasks-state-1.0.0'

export function App() {
  const [tasks, setTasks] = useState<TTask[]>([])

  function loadedSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY)

    if (saved) {
      setTasks(JSON.parse(saved))
    }
    return []
  }

  useEffect(() => {
    loadedSavedTasks()
  }, [])

  function setTasksAndSave(newTasks: TTask[]) {
    setTasks(newTasks)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks))
  }

  function addTask(taskName: string) {
    setTasksAndSave([...tasks, {
      id: uuid(),
      name: taskName,
      isCompleted: false
    }])
  }

  function deleteTask(taskId: string) {
    const newTasks = tasks.filter(task => task.id !== taskId)

    setTasksAndSave(newTasks)
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

    setTasksAndSave(newTasks)
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