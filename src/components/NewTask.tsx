import { useState, FormEvent, ChangeEvent, InvalidEvent } from "react";
import { PlusCircle } from "lucide-react";

import styles from './NewTask.module.css'

interface NewTaskProps {
  onCreateNewTask: (content: string) => void;
}

export function NewTask({ onCreateNewTask }: NewTaskProps) {
  const [content, setContent] = useState('')
  
  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    onCreateNewTask(content)
    setContent('')
  }

  function handleContentChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setContent(event.target.value)
  }

  function handleContentInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório')
  }

  const isContentEmpty = content.length === 0

  return (
    <form onSubmit={handleCreateNewTask} className={styles.newTask}>
      <input 
        type="text" 
        placeholder="Adicione uma nova tarefa"
        onChange={handleContentChange}
        value={content}
        onInvalid={handleContentInvalid}
        required
      />
      <button type="submit" disabled={isContentEmpty}>
        Criar
        <PlusCircle size={18}  />
      </button>
    </form>
  )
}