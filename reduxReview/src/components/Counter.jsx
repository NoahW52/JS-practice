import { connect } from "react-redux"

function Counter(props) {

    const handleAdd = () => {
        props.add()
    }
    const handleSub = () => {
        props.sub()
    }
    return(
        <>
            <h1>Current Counter:{props.counter}</h1>
            <button onClick={handleAdd}>Increment</button>
            <button onClick={handleSub}>Decrement</button>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}
const mapdispatchToProps = (dispatch) => {
    return {
        add: () => dispatch({type: "ADD"}),
        sub: () => dispatch({type: "SUB"})
    }
}

export default connect(mapStateToProps, mapdispatchToProps)(Counter)