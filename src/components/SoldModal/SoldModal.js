import React  from 'react';
import './SoldModal.css';
import { CloseButton } from '../CloseButton/CloseButton';

export const SoldModal = ({close,setClose}) => {
    
   
        return (  
            <div className="soldModal">
                Producto vendido
           <CloseButton close = {close} setClose = {setClose}/>
            </div>
        )
  
}