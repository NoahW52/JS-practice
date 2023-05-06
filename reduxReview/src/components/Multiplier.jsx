import { useState } from "react";
import { connect } from "react-redux";

function Multiplier(props) {
    const [prevNum, newNum] = useState(0)

    const handleTimes2 = () => {
        props.times2(prevNum)
    }
    const handleMultiButton = () => {
        props.multi(prevNum)
    }
    const handleMultiInput = (e) => {
        newNum(e.target.value)
    }
    return(
        <>
            <h1>Multiply!</h1>
            <button onClick={handleTimes2}>Multiply Me!: {props.view}</button>
            <br />
            <input type="text" onChange={handleMultiInput} />
            <button onClick={handleMultiButton}>enter</button>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        view: state.counter
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        times2: () => dispatch({type: "TIMES2"}),
        multi: (value) => dispatch({type: "MULTI", payload: value})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Multiplier)