import React, { useState } from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/Todo.Slice'
import { updateTodo } from '../features/Todo.Slice'


function TodoItem({todo,onUpdate,onRemove}){
    const[text,setText] = useState(todo.text)
    const [checked,setChecked] = useState(todo.checked)
    const [editable,setEditable] = useState(todo.editable)
    const handleToggle = ()=>{
        setEditable(!editable)
        onUpdate(todo.id,text,checked,editable)
    }
    return(
        <div className='flex  gap-2 mb-3 '>
            <input type="checkbox" value={checked} onChange={(e)=>setChecked(e.target.checked)}/>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)} disabled={!editable} />
            <button className='bg-black text-white p-2 mx-2 ' onClick={()=> onRemove(todo.id)}>Delete</button>
            <button className='bg-black text-white p-2 mx-2' onClick={handleToggle}>{
                    (!editable===true) ? <p>Edit</p> : <p>Save</p>
                }</button>
        </div>
    )
}

function Todos() {
    
    const todos = useSelector(state=>state.todos.todos)
    const dispatch = useDispatch()
    const handleUpdate = (id,text,checked,editable)=>{
        dispatch(updateTodo({
            id,
            updates:{
                text,
                checked,
                editable
            }
        }))
    }
    
    return (
        <div>
        {todos.map((todo)=>(
            <TodoItem
            key={todo.id}
            todo={todo}
            onUpdate={handleUpdate}
            onRemove={()=> dispatch(removeTodo(todo.id))}
            />
        ))}
    </div>
  )
}
export default Todos