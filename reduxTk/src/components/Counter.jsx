import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, add, subtract } from "../store/slices/counterSlice"
import { useState } from "react"

function Counter() {

    const state = useSelector(state => state.counter)
    //the counter in state.counter is form the store.js 
    const dispatch = useDispatch()

    const [value, setValue] = useState(2)

    return(
        <>
        <h1>Counter: {state.count}</h1>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClickCapture={() => dispatch(decrement())}>decrement</button>
        <br />
        <input type="text" value={value} onChange={e => setValue(e.target.value)} /> 

        {/* this input value onChange is a shortened version of: 
        const handleInput = (e) => {
            setValue(e.target.value)
        }
        */}
        
        <button onClick={() => dispatch(add(value))}>add</button>
        <button onClick={() => dispatch(subtract(value))}>subtract</button>
        </>
    )
}

export default Counter