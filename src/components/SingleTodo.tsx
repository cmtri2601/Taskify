import React from 'react'
import { Todo } from '../model';
import {AiFillEdit, AiFillDelete} from 'react-icons/ai'
import {MdDone} from 'react-icons/md'

import styles from './SingleTodo.module.css'

interface Props {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo:React.FC<Props> = ({todo, todos, setTodos}: Props) => {
  const handleEdit = (id:number) => {
    
  }

  const handleDelete = (id:number)  => {
    setTodos([...todos.filter(todo => todo.id !== id)])
  }  

  const handleDone = (id:number) => {
    setTodos([...todos.map(todo => 
      todo.id === id ? {...todo, isDone : !todo.isDone} : todo)
    ])
  }
  return (
    <form className={styles.single}>
      {
        todo.isDone ? (<s className={styles['single--text']}>
          {todo.todo}
        </s> ) : (<span className={styles['single--text']}>
          {todo.todo}
        </span> )
      }
      
      <div>
        <span className={styles.icon} onClick={()=> handleEdit(todo.id)}>
            <AiFillEdit />
        </span>
        <span className={styles.icon} onClick={()=>handleDelete(todo.id)}>
            <AiFillDelete />
        </span>
        <span className={styles.icon} onClick={()=>handleDone(todo.id)}>
            <MdDone />
        </span>
      </div>
    </form>
  )
}

export default SingleTodo
