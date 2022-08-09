import React from 'react'
import { Form } from './Form'
import { Todo } from './Todo'
export const Todolist = ({todos,setTodos,formData,setFormData   }) => {
    
  return (
    <div>
        <Form formData={formData} setFormData={setFormData} todos={todos} setTodos={setTodos}/>
       <ul className="list-group">
        {todos.map((({text,id,completed})=>(
            <Todo key={id}text={text}id={id} todos={todos} setTodos={setTodos}completed={completed}  />
        )))}
       </ul>
    </div>
  )
}
