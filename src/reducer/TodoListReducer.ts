import { Todo } from "../models/model";

export type TodoActions = 
 { type: "ADD", payload: {todo: string}}
| { type: "DELETE", payload: {id: number}}
| { type: "DONE", payload: {id: number}}
| { type: "EDIT", payload: {editTodo: string, id: number}};

export const todoReducer = (state: Todo[], action: TodoActions) :Todo[] => {
  const {type, payload} = action;
  switch (type) {
  case 'ADD': 
    return [...state, {id: Date.now(), todo: payload.todo, isDone: false}];
  case 'DELETE': 
    return [...state.filter(todo => 
      todo.id !== payload.id)
    ] 
  case 'DONE':
    return [...state.map(todo => 
      todo.id === payload.id ? {...todo, isDone : !todo.isDone} : todo)
    ]
  case 'EDIT':  
    return [...state.map(todoFromList => 
    todoFromList.id === payload.id 
      ? {...todoFromList, todo: payload.editTodo}
      : todoFromList
  )]
  default:
    return state;
  }
}