import React,{useReducer, createContext} from "react";
import contextReducer from "./contextReducer";
const initialState= JSON.parse(localStorage.getItem("transactions"))||[{"amount":75,"category":"House","type":"Expense","date":"2022-07-13","id":"9ce124f4-6fed-4199-b8b5-93c10431a070"},{"amount":55,"category":"Travel","type":"Expense","date":"2022-07-13","id":"e6525807-00c3-4f35-80a8-9586b59cdbbd"},{"amount":50,"category":"Business","type":"Income","date":"2022-07-13","id":"389d3926-56a1-4fc8-b4d3-88576e934b0a"},{"amount":100,"category":"Salary","type":"Income","date":"2022-07-13","id":"87cd53f2-cc67-42d9-96d8-eeec881552d6"}]	

 
export const ExpenseTrackerContext = createContext(initialState);


export const Provider = ({children})=>{
    const [transactions, dispatch] = useReducer(contextReducer, initialState)
    //action creators
    const deleteTransaction = (id)=>{
         dispatch({type:"DELETE_TRANSACTION", payload:id})
    }
    const addTransaction = (transaction)=>{
        dispatch({type:"ADD_TRANSACTION", payload:transaction})
   }
   const balance = transactions.reduce((acc, currVal)=>{
    return (currVal.type === "Expense" ? acc-currVal.amount : acc+currVal.amount)
   },0)
  
    return(
        <ExpenseTrackerContext.Provider value={{deleteTransaction,addTransaction, transactions, balance }}>
           {children} 
        </ExpenseTrackerContext.Provider>
    )
}



