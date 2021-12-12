import React  from 'react';
import './CloseButton.css';

export const CloseButton = ({setClose}) => {
  
   
    const closeModal = () => {
        setClose(true);
          document.body.style.backgroundColor= "white";
    }
    

    return (

        <div>
          <button className = "close" onClick = {closeModal}>x</button>
         
        </div>
    )
}