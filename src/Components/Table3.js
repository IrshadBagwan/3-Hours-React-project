import React from "react";
import CustomerLists from "./CustomerLists";

const Table3 =(props)=>{

    return(<>

    <h1>Table 3</h1>

    <ul className="goal-list">
    {props.order.map((goal) =>
    
      goal.table === "Table3" ?  (
        (
          <CustomerLists
            key={goal.id}
            id={goal.id}
            onDelete={props.onDeleteItem}
            table={goal.table}
          >
            {   `${goal.id} ||

                ${goal.price} ||

                ${goal.dish} ||

                ${goal.table}`  
 }
          </CustomerLists>
        )
      ) : 
      console.log("no")
    )}
  </ul>
  </>
    )
}

export default Table3;