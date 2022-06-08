import { Add, Div, Mul, Sub } from "./action.type";


export const add = (value)=> ({type:Add, payload:value})
export const sub = (value)=> ({type:Sub, payload:value})
export const div = (value)=> ({type:Div, payload:value})
export const mul = (value)=> ({type:Mul, payload:value})