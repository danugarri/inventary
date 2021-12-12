import React  from 'react';
//import './SellButton.css';

export const CloseButton = ({setClose}) => {
  
   
    const closeModal = () =>setClose(true);
    

    return (

        <div>
          <button onClick = {closeModal}>x</button>
         
        </div>
    )
}