import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { TaskList } from './components/TaskList'

import styles from './App.module.css'
import './global.css'

export type TaskType = {
  id: string;
  content: string;
  isCompleted: boolean;
} 

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([
    {
      id: uuidv4(),
      content: "Estudar Typescript.",
      isCompleted: false
    },
  ])

  function createNewTask(content: string) {
    const newTask = {
      id: uuidv4(),
      content,
      isCompleted: false
    }

    setTasks((state) => [...state, newTask])
  }

  function completeTask(id: string) {
    const newTask = tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task
    })

    setTasks(newTask)
  }

  function deleteTask(id: string) {
    const deleteToTask = tasks.filter(task => {
      return task.id !== id
    })

    setTasks(deleteToTask)
  }

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <NewTask onCreateNewTask={createNewTask} />
        <TaskList 
          tasks={tasks} 
          onCompletedTask={completeTask}
          onDeleteTask={deleteTask}
        />
      </div>
    </>
  )
}

export default App
