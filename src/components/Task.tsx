import { TaskType } from '../App'
import { Trash2 } from 'lucide-react'

import styles from './Task.module.css'

interface TaskProps {
  task: TaskType;
  onCompletedTask: (id: string) => void;
  onDeleteTask: (id: string) => void; 
}

export function Task({ task, onCompletedTask, onDeleteTask }: TaskProps) {
  function handleCompleteTask() {
    onCompletedTask(task.id)
  }
  
  function handleDeleteTask() {
    onDeleteTask(task.id)
  }

  return (
    <div className={styles.task}>
      <div className={styles.checkbox}>
        <input type="checkbox" onClick={handleCompleteTask} />
        <label htmlFor=""></label>
      </div>
      <p className={task.isCompleted ? styles.completed : ''}>
        {task.content}
      </p>
      <button 
        type='button' 
        className={styles.buttonDelete}
        onClick={handleDeleteTask}
      >
        <Trash2 size={20} />
      </button>
    </div>
  )
}