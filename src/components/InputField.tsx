import React, { useContext, useRef, useState } from 'react'
import styles from './InputField.module.css'
import {TodoListContext, TodoListContextInterface} from "../context/TodoListContext"

const InputField = () => {

  const todoDispatch = useContext<TodoListContextInterface | null>(TodoListContext)?.todoDispatch;
  const [todo, setTodo] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form className={styles.input} onSubmit={(e) => {
      e.preventDefault();

      todoDispatch?.({type: 'ADD', payload: {todo}})
      setTodo('');
      inputRef.current?.blur()
    }}>
        <input
            ref={inputRef} 
            type="input" 
            value={todo}
            onChange={
                (e)=>setTodo(e.target.value)
            }
            placeholder='Enter a task' 
            className={styles.box} 
        />
        <button  type='submit' className={styles.submit}>
            Go
        </button>
    </form>
  )
}

export default InputField



