import React from "react";

const CustomerLists = (props) =>{
    
 

 
        // const [deleteText, setDeleteText] = useState('');
      
        const deleteHandler = () => {
          // setDeleteText('(Deleted!)');
          props.onDelete(props.id);
        };
    return(
        <li className="goal-item" >
        {props.children}
        <button onClick={deleteHandler}>Delete</button>
      </li>
    )
}


export default CustomerLists;