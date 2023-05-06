import React, { useState, useEffect } from 'react';
import './App.css';
// import CustomerOrderlist from './Components/CustomerOrderlist';
import Input from './Components/Input';
import Table1 from './Components/Table1';
import Table2 from './Components/Table2';
import Table3 from './Components/Table3';


//to set data from localstorage

const getLocalItems = () =>{
  let data = localStorage.getItem('data');
  console.log(data);

  if(data){
    return JSON.parse(localStorage.getItem('data'));
  }else{
    return[];
  }
}

function App() {

  const [ordersList,setordersList] = useState(getLocalItems());

const addCustomerhandler = (uid,Price,chDish,chtable) =>{
  setordersList((prevorderlist)=>{
    return[...prevorderlist, {id:uid, price:Price, dish:chDish, table:chtable }];
  });
}

const deleteItemHandler = goalId => {
  setordersList(prevGoals => {
    const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
    return updatedGoals;
  });
};


useEffect(()=>{
   localStorage.setItem('data',JSON.stringify(ordersList));
},[ordersList]);
  
  return (
  
    <div className="App">
      {/* <header className="App-header"> */}

        {/* {arr.map((el)=>{
          return <><li style={{ color: 'red' }}>{`${el.name} ${el.age}`}</li><button onClick={()=>clickHandler(el.id)}>X</button></>          
        }
        
        )}
        <h2>hello</h2>
        <p>The count is{}</p>
        <HookCounter/>
        <CompB/> */}
        <Input onAddUser={addCustomerhandler}/>
        <Table1 order={ordersList} onDeleteItem={deleteItemHandler}></Table1>
        <Table2 order={ordersList} onDeleteItem={deleteItemHandler} ></Table2>
        <Table3 order={ordersList} onDeleteItem={deleteItemHandler}  ></Table3>
        {/* <CustomerOrderlist order={ordersList} onDeleteItem={deleteItemHandler}/> */}
      {/* </header> */}
     
    </div>
   
  );

      };

export default App;
