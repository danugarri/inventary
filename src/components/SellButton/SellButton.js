import React ,{useState} from 'react';
import { SoldModal } from '../SoldModal/SoldModal';
import './SellButton.css';

export const SellButton = () => {
    const [sold, setSold] = useState(false);
    const [close, setClose] = useState(false);
    const sellProduct = () => {
        setSold(true);
        setClose(false);
    }
    return (

        <div>
            <button onClick = {sellProduct} id="sell">Vender</button>
            {
            sold && !close &&
            <SoldModal close = {close} setClose = {setClose}/>
            }
        </div>
    )
}