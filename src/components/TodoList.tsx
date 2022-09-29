import React from 'react'
import { Todo } from '../model'
import styles from './TodoList.module.css'

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList:React.FC<Props> = ({todos, setTodos}: Props) => {
  return (
    <div className={styles.todos}>
      {todos.map(todo => (
        <li>{todo.todo}</li>
      ))}
    </div>
  )
}

export default TodoList
