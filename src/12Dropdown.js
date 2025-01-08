import React,{useState} from "react";


const Dropdown = () => {
const [open,setOpen]=(null)
   
  return (
    <>
      <ul >
        <li >Menu 1</li>
          <ul style={{display:"none"}}>
            <li>sub1</li>
            <li>sub2</li>
            <li>Menu 2</li>
              <ul style={{display:"none"}}>
                <li >sub2</li>
                <li >sub 3</li>
              </ul>
          </ul>
      </ul>
    </>
  );
};

export default Dropdown;
