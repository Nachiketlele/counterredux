import { Add, Div, Mul, Sub } from "./action.type"



export const reducer = (state, {type,payload})=>{
    
    switch(type){
        case Add:{
            state.count= state.count+Number(payload)
           return {...state}
        }
        case Sub:{
            state.count=state.count-Number(payload)
            return {...state}
        }
        case Div:{
            state.count = state.count/Number(payload)
            return {...state}
        }
        case Mul:{
            state.count = state.count*Number(payload)
            return {...state}
        }
        default:{
           return state
        }
    }
}