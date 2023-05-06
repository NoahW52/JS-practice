const initialState = {
    counter: 0
}

const Reducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD":
            return {
                ...state,
                counter: state.counter +1
            }
        case "SUB":
            return {
                ...state,
                counter: state.counter -1
            }
        case "ADD_BOX":
            return {
                ...state,
                counter: state.counter + parseInt(action.payload)
            }
        case "SUB_BOX":
            return {
                ...state,
                counter: state.counter - parseInt(action.payload)
            }
        default:
            return state
        case "TIMES2":
            return {
                ...state,
                counter: state.counter *2
            }
        case "MULTI":
            return {
                ...state,
                counter: state.counter * parseInt(action.payload)
            }
    }
}

export default Reducer