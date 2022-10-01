import { useContext } from 'react'
import {TodoListContext, TodoListContextInterface } from '../context/TodoListContext';
import SingleTodo from './SingleTodo';
import styles from './TodoList.module.css'

const TodoList= () => {
  const todoState = useContext<TodoListContextInterface | null>(TodoListContext)?.todoState;

  return (
    <div className={styles.todos}>
      {todoState?.map(todo => (
        <SingleTodo 
            todo={todo} 
            key={todo.id}
        />
      ))}
    </div>
  )
}

export default TodoList
