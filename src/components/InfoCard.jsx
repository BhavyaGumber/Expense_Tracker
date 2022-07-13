import React from 'react'
const isIncome = Math.round(Math.round)
function InfoCard() {
  return (
    <div style={{textAlign:"center", padding: "0 15%", lineHeight:"1.5rem"}}>
      Try saying: <br/>
      Add {isIncome ? "Income " : "Expense " }
      for {isIncome ? "$100 " : "$50 "}
      in Category {isIncome ? "Business " : "House "}
      for {isIncome ? "Monday " : "Tuesday "}
    </div>
  )
}

export default InfoCard

