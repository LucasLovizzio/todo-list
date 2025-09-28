import React from 'react'
import tick from '../assets/check_box.svg'
import not_tick from '../assets/check_box_outline_blank.svg'
import delete_icon from '../assets/delete.svg'

const TodoItems = ({ text, id, isComplete, deleteTodo, toggleComplete }) => {

  return (
    <div className='flex items-center my-3 gap-2'>
        <div onClick={() => toggleComplete(id)} className='flex flex-1 items-center cursor-pointer'>
            <img src={isComplete ? tick : not_tick} alt="" className='w-7'/>
            <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-700 ${isComplete ? 'line-through' : ''}`}> {text} </p>
        </div>

    <img src={delete_icon} alt="" className='w-9 hover:bg-red-500 rounded-full p-1 cursor-pointer' onClick={() => deleteTodo(id)} />

    </div>
  )
}
export default TodoItems