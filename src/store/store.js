import { legacy_createStore } from "redux"
import { reducer } from "./reducer"



let counter={
    count: 0
}
// let value = {
//     val : ""
// }
export const store = legacy_createStore(reducer,counter)