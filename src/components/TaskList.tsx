import { Task } from './Task'
import { TaskType } from '../App'

import styles from './TaskList.module.css'

import clipboradImg from '../assets/clipboard.png'

interface TaskListProps {
  tasks: TaskType[];
  onCompletedTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function TaskList({ tasks, onCompletedTask, onDeleteTask }: TaskListProps) {
  const amountTasks = tasks.length;
  const amountCompletedTasks = tasks.filter(task => task.isCompleted).length

  return (
    <main className={styles.taskList}>
      <div className={styles.info}>
        <div className={styles.createdTasks}>
          <p>Tarefas criadas</p>
          <span>{amountTasks}</span>
        </div>

        <div className={styles.completedTasks}>
          <p>Concluídas</p>
          <span>{amountCompletedTasks} de {amountTasks}</span>
        </div>
      </div>

      <section className={styles.tasksList}>
        {tasks.length !== 0 ? (
          tasks.map(task => (
            <Task 
              key={task.id} 
              task={task} 
              onCompletedTask={onCompletedTask}
              onDeleteTask={onDeleteTask}
            />
          ))
        ): (
          <div className={styles.tasksListEmpty}>
          <img src={clipboradImg} alt="" />

          <div>
            <span>Você ainda não tem tarefas cadastradas</span>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div>
        )}
      </section>
    </main>
  )
}