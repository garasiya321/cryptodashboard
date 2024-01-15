

export const withdraw=(amount)=>{
    return{
        
        type: 'withdraw',
        payload: amount
    
        
    }

}


export const deposit = (amount)=>{
    return {
        type: 'deposit',
        payload: amount
    }
}