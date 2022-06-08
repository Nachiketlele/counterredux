import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, div, mul, sub } from '../store/action'

const Counter = () => {
    const dispatch = useDispatch()
    const count = useSelector((state)=>state.count)
    const [value,setValue] = useState(0)
  return (
    <div>
        <h1>counter:{count}</h1>
        <div>
            <input value={value} onChange={(event)=>setValue(event.target.value)} type="number" />
            <button onClick={()=>dispatch(add(value))}>+</button>
            <button onClick={()=>dispatch(sub(value))}>-</button>
            <button onClick={()=>dispatch(mul(value))}>*</button>
            <button onClick={()=>dispatch(div(value))}>/</button>
        </div>
    </div>
  )
}

export default Counter