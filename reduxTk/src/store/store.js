import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./slices/counterSlice"
//can change the name of the import as long as exporting "export default 'and then the path'"

export const store = configureStore({
    reducer: {
        counter: counterReducer
    },
})
