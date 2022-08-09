import React, { useState } from 'react'
import { useParams ,useNavigate} from 'react-router-dom';

export const EditTodo = ({formData,setFormData,todos,setTodos,}) => {
    const [error, setError] = useState({
        name:""
       })

    const { todoId } = useParams();
   
      function handleOnEditTodo(todo) {

        const allTodos = [...todos];
        const indx = allTodos.findIndex((item) => item.id == todoId);
        allTodos[indx] = todo
        setTodos(allTodos);

    }
  
    const handleCancel=()=>{
        navigate("/", { replace: true });
    }
      
    const handleOnChange = (e) => {
      
        setFormData(e.target.value)
      };
      const navigate = useNavigate();

      const handleOnSubmit=e=>{
        
        e.preventDefault();
    const todo = {text:formData, id: todoId };
        if(!formData.trim()){
          setError({name:"name is required"})

        }
        else{
            handleOnEditTodo(todo)

        setError({name:""})
        navigate("/", { replace: true });
        }
       
        setFormData("")

      }
    
      


  return (
    <div className="pt-5 px-5">
      <h3>Edit your todo</h3>
      <hr />
      <form onSubmit={handleOnSubmit}>
      
        <div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="Todo" aria-label="Todo" aria-describedby="button-addon2"
              onChange={handleOnChange}             value={formData}


  />
  <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Save</button>
  <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleCancel}>Cancel</button>
  
</div>
       
        
      </form>
<div className="text-danger my-2">{error.name}</div>

    </div>  
  )
  
  }
