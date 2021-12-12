import React from 'react';
import { SellButton } from '../SellButton/SellButton';
import './Table.css';

export const Table = () => {

    return(
        <table id ="table">
            <tr>
                <th>Nombre</th>
                <th>Cantidad</th>
            </tr>
            <SellButton/>
        </table>
    )
}