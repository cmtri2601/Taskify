import React, { FormEvent, useContext, useEffect, useRef, useState } from 'react'
import { Todo } from '../models/model';
import {AiFillEdit, AiFillDelete} from 'react-icons/ai'
import {MdDone} from 'react-icons/md'

import styles from './SingleTodo.module.css'
import {TodoListContext, TodoListContextInterface } from '../context/TodoListContext';

interface Props {
    todo: Todo;
}

const SingleTodo:React.FC<Props> = ({todo}: Props) => {
  const todoListContext = useContext<TodoListContextInterface | null>(TodoListContext);

  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit])
  

  const handleEdit = (e: FormEvent) => {
    e.preventDefault();
    todoListContext?.todoDispatch({type: "EDIT", payload: {editTodo: editTodo, id: todo.id}})
    setEdit(false);
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
        <span 
          className={styles.icon} 
          onClick={() =>
            todoListContext?.todoDispatch({type: "DELETE", payload: {id: todo.id}})
          }
        >
            <AiFillDelete />
        </span>
        <span 
          className={styles.icon} 
          onClick={()=>
            todoListContext?.todoDispatch({type: "DONE", payload: {id: todo.id}})
          }
        >
            <MdDone />
        </span>
      </div>
    </form>
  )
}

export default SingleTodo
