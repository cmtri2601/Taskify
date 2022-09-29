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
  return (
    <form className={styles.single}>
      <span className={styles['single--text']}>
        {todo.todo}
      </span>
      <div>
        <span className={styles.icon}>
            <AiFillEdit />
        </span>
        <span className={styles.icon}>
            <AiFillDelete />
        </span>
        <span className={styles.icon}>
            <MdDone />
        </span>
      </div>
    </form>
  )
}

export default SingleTodo
