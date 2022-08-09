import React from 'react'
import { Link } from 'react-router-dom'

export const Todo = ({text,todos,setTodos,id,completed}) => {
  const deleteHandler=()=>{
    let alltodos=[...todos]
    alltodos=alltodos.filter((item)=>item.id!==id)
    setTodos(alltodos)
  }
  const completeHandler=()=>{
    setTodos(todos.map(item=>{
      if(item.id ===id){
      
      return{
        ...item,completed:!item.completed   
      }
    }
      return item;

    }
    ))
  }
  return (
    <div className='class="card" style="width: 18rem text-center' >
       <ul className="list-group list-group-flush">
        <li  className={completed? "list-group-item  text-decoration-line-through":"list-group-item"} onClick={completeHandler}>{text}
       
        </li>
        <li className='list-group-item'> <button
                    className="btn btn-danger mx-3"
                    onClick={deleteHandler}
                  >
                    Delete
                  </button>
                 <Link  to={`/edit-todo/${id}`} className="btn btn-primary mx-3">
                Edit
                 
                 </Link></li>
                 </ul>
        {/* <button
                    className="btn flex-grow-1 btn-primary"
                    onClick={completeHandler}
                  >
                    Completed
                  </button> */}
       
    </div>
  )
}
