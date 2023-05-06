import { connect } from "react-redux"
import { useState } from "react"

function InputCount(props) {

    const [prevNum, setNum] = useState(0)

    const handleAddBox = () => {
        props.addBox(prevNum)
    }
    const handleSubBox = () => {
        props.subBox(prevNum)
    }
    const handleInput = (e) => {
        setNum(e.target.value)
    }
    return(
        <>
            <h1>TextBox Counters</h1>
            <br />
            <input type="text" onChange={handleInput}/>
            <button onClick={handleAddBox}>add</button>
            <button onClick={handleSubBox}>sub</button>
        </>
    )
}
const mapdispatchToProps = (dispatch) => {
    return {
        addBox: (value) => dispatch({type: "ADD_BOX", payload: value}),
        subBox: (value) => dispatch({type: "SUB_BOX", payload: value})
    }
}

export default connect(null, mapdispatchToProps)(InputCount)