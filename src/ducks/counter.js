const initialState = {
    currentValue : 0 
}

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

export function increment(num){
    return {
        type:INCREMENT,
        payload:num
    }
}
export function decrement(num){
    return {
        type:DECREMENT,
        payload:num
    }
}

export default function counter(state=initialState,action){
    switch (action.type) {
        case INCREMENT:
            // return Object.assign({},state,{currentValue:state.currentValue+action.payload})
            return{
                ...state,
                currentValue:state.currentValue+action.payload
            }
        case DECREMENT:
            // return Object.assign({},state,{currentValue:state.currentValue+action.payload})
            return{
                ...state,
                currentValue:state.currentValue-action.payload
            }
        default:
            return state;
    }

    
}