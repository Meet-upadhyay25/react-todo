import React, { useState } from 'react'
import complete_icon from "../assets/complete.png"
import pending_icon from "../assets/pending.png"
import delete_icon from "../assets/delete.png"
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo, toggleCompletedTodo} from '../service/reducers/todoSlice'

const Home = () => {
  const [todoInput, setTodoInput] = useState("")
  const todos = useSelector(store => store.todo.todos)
  if(!todos) return null
  const dispatch = useDispatch()

const handleAddTodo = () => {
  console.log("button clicked");
  dispatch(addTodo({title:todoInput, completed:false}))
}

const handleCompletedTodo = (id) => {
  console.log("Button toggle");
  dispatch(toggleCompletedTodo(id))
}

  // console.log(todos);
  return (
    <section className='w-screen mt-5'>
      <div className='flex items-center justify-center mb-5 gap-3'>
      <input value={todoInput} onChange={(e)=>setTodoInput(e.target.value)} className='w-96 py-2 pl-1 border border-slate-300' type="text" placeholder='Enter a task'/>
      <button onClick={handleAddTodo} className='px-5 bg-blue-400 py-2 rounded-lg text-white font-bold'>Add</button>
      </div>
        <h1 className='text-center'>Your Task</h1>
      <div className='flex items-center justify-center mt-5'>
        {
          todos.map((todo)=>(
            <div className='flex gap-80 items-center' key={todo.id}>
            <h1 className='text-xl'>{todo.title}</h1>
            <div className='flex items-center gap-5'>
            <img onClick={()=>handleCompletedTodo(todo.id)} className='w-8' src={todo.completed ? complete_icon : pending_icon} alt='icons'/>
            <img onClick={()=>dispatch(deleteTodo(todo.id))}  className='w-8' src={delete_icon} alt='icons'/>
            </div>
          </div>
          ))
        }
      
      </div>
    </section>
  )
}

export default Home