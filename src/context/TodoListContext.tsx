import React, { createContext, useReducer } from "react";
import { Todo } from "../models/model";
import { TodoActions, todoReducer} from '../reducer/TodoListReducer'

interface Props  {
    children: React.ReactNode;
}

export interface TodoListContextInterface {
    todoState: Todo[];
    todoDispatch: React.Dispatch<TodoActions>;
}

export const TodoListContext = createContext<TodoListContextInterface | null>(null);

const TodoListContextProvider:React.FC<Props> = ({children}: Props) => {
    const [todoState, todoDispatch] = useReducer(todoReducer, []);

    return (
        <TodoListContext.Provider value={{todoState, todoDispatch}}>
            {children}
        </TodoListContext.Provider>
    )
}

export default TodoListContextProvider;