import React, { FormEvent, useEffect, useRef, useState } from 'react'
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
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit])
  

  const handleEdit = (e: FormEvent) => {
    e.preventDefault();
    
    setTodos([...todos.map(todoFromList => 
      todoFromList.id === todo.id 
        ? {...todoFromList, todo: editTodo}
        : todoFromList
    )])

    setEdit(false);
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
    <form className={styles.single} onSubmit={e => handleEdit(e)}>
      {
        edit ? (<input 
          ref={inputRef}
          type="input"
          value={editTodo}
          onChange={e => setEditTodo(e.target.value)}
          className={styles['single--text']}
        />) : 
        todo.isDone ? (<s className={styles['single--text']}>
          {todo.todo}
        </s> ) : (<span className={styles['single--text']}>
          {todo.todo}
        </span> )
      }
      
      <div>
        <span 
          className={styles.icon} 
          onClick={() => { 
              // if (!edit && !todo.isDone) 
              //   setEdit(true);
              !edit && !todo.isDone && setEdit(true);
            }
          }
        >
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
