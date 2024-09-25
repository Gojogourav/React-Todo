import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/Todo.Slice'; // Ensure action creator is named addTodo

function AddTodo() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        if (input.trim()) { // Check for non-empty input
            dispatch(addTodo(input));
            setInput(''); // Clear input after submission
        } else {
            alert('Please enter a todo'); // Optional: alert if input is empty
        }
    };

    return (
        <form onSubmit={addTodoHandler} className='flex justify-between mb-3'>
            <input
                className='bg-gray-200 w-3/4' 
                type="text" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                placeholder="Enter a new todo" // Added placeholder for better UX
            />
            <button className='bg-black p-1 text-white' type='submit'>Add Todo</button> {/* Changed button text */}
        </form>
    );
}

export default AddTodo;
