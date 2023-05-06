import React, { useState, useRef, useReducer } from "react";

const Input = (props) => {
  //  const [uniqueorderid,setuniqueorderid] = useState('');
  //  const [isValid,setIsValid] = useState(true);

  const uniqueordderidRef = useRef("");
  const choosePriceRef = useRef("");
  const chooseDishRef = useRef("");
  const chosseTableRef = useRef("");

  const FormsubmitHandler = (event) => {
    event.preventDefault();
    const uniqueorderid = uniqueordderidRef.current.value;
    const chooseprice = choosePriceRef.current.value;
    const chosseDish = chooseDishRef.current.value;
    const chosseTable = chosseTableRef.current.value;

    if (uniqueorderid.trim().length === 0 || chooseprice.trim().length === 0) {
      alert("please enter values");
    }
    props.onAddUser(uniqueorderid, chooseprice, chosseDish, chosseTable);
    uniqueordderidRef.current.value = "";
    choosePriceRef.current.value = "";
    chooseDishRef.current.value = "";
    chosseTableRef.current.value = "";
  };

  return (
    <>
      <form onSubmit={FormsubmitHandler}>
        <label htmlFor="uniqueorderid">Unique Order id</label>
        <input id="uniqueordderid" ref={uniqueordderidRef} type="number" />
        <label htmlFor="ChoosePrice">Choose Price</label>
        <input id="ChoosePrice" ref={choosePriceRef} type="number" />
        <label htmlFor="ChooseDish">Choose Dish</label>
        <input id="ChooseDish" ref={chooseDishRef} type="text" />
        <label htmlFor="Chooseatable">Choose A Table</label>
        <select id="Chooseatable" ref={chosseTableRef}>
          <option value="Table1">Table 1</option>
          <option value="Table2">Table 2</option>
          <option value="Table3">Table 3</option>
        </select>
        <button type="submit">Add To List</button>
      </form>
      
   
     

      
    </>
  );
};

export default Input;
