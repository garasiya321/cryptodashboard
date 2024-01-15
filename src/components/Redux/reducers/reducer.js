const INIT_STATE= 150000;

export const accountBalance = (state = INIT_STATE, action)=>{
    if(action.type === "withdraw"){
        return state - action.payload
    }
    else if(action.type==="deposit"){
        return state + action.payload
    }
    return state
}


