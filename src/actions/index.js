export const incNumber = (num)=> { // for the second time pass the num here
    return {
          type: "INCREMENT",
          payload: num         // here payload is a key 
    }
}
export const decNumber = ()=> {
    return {
          type: "DECREMENT"
    }
}