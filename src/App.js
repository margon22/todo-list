import React, { useState } from 'react';
import { Todolist } from './components/Todolist';
import { Routes, Route } from "react-router-dom";
import { Navbar } from './components/Navbar';
import { EditTodo } from './components/EditTodo';

function App() {
    const [formData, setFormData] = useState('');
    const [todos, setTodos] = useState([])



    return ( <
        div className = "App" >
        <
        Navbar / >
        <
        Routes > {
            /* <Route path='/' element={
                  <h1>Home</h1>

                    }/> */
        } {
            /* <Route path='Todo' element={
                  <Form formData={formData} setFormData={setFormData} todos={todos} setTodos={setTodos} />

                    }/> */
        } <
        Route path = '/'
        element = { <
            Todolist setFormData = { setFormData }
            formData = { formData }
            todos = { todos }
            setTodos = { setTodos }
            />

        }
        /> <
        Route path = 'edit-todo/:todoId'
        element = { <
            EditTodo setFormData = { setFormData }
            formData = { formData }
            todos = { todos }
            setTodos = { setTodos }
            />

        }
        /> <
        /Routes> <
        /div>
    );
}

export default App;