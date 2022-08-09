import React, { useState } from 'react'
import {useRef} from 'react';

export const Form = ({formData,setFormData,todos,setTodos,editData,setEditData}) => {
   const [error, setError] = useState({
    name:""
   })
   const ref = useRef(null);
   const handleClick = () => {
    ref.current.value = '';
  };
    const handleOnChange = (e) => {

        setFormData(e.target.value)
      };
  
      const handleOnSubmit=e=>{
        e.preventDefault();



        if(!formData.trim()){
          setError({name:"name is required"})

        }
        else{
        setTodos([...todos,{text:formData,completed:false,id:Math.random()*10000}])
        setError({name:""})
        // setFormData('')
        handleClick()
              }
      }

  return (
<div className="pt-5 px-5">
      <h3>Add your todo</h3>
      <hr />
      <form onSubmit={handleOnSubmit}>
      
        <div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="Todo" aria-label="Todo" aria-describedby="button-addon2"
        id='input'      onChange={handleOnChange} ref={ref}           


  />
  <button className="btn btn-outline-secondary" type="submit" id="button-addon2" >addTodo</button>
  
</div>
<div className="text-danger my-2">{error.name}</div>
       
        
      </form>
    </div>  
    )
}
