import React from 'react';
import { BrowserRouter as Router,NavLink } from 'react-router-dom';
import { InputAmount } from '../InputAmount/InputAmount';
import { SellButton } from '../SellButton/SellButton';
import './Table.css';

export const Table = () => {

    return(
        <>
     
        <table id ="table">
            <thead>
            <tr>
                <th>Nombre</th>
                <th>Cantidad</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Producto 1</td>
                <td><InputAmount/></td>
                <td><SellButton/></td>
            </tr>
             <tr>
                <td>Producto 2</td>
                <td><InputAmount/></td>
                <td><SellButton/></td>
            </tr>
             <tr>
                <td>Producto 3</td>
                <td><InputAmount/></td>
                <td><SellButton/></td>
            </tr>
            </tbody>
        </table>
        <a href ="./">volver</a>
        {
            /*
        <Router>
              <NavLink to ="/">Volver</NavLink>
            </Router>
            */
        }
               </>
    )
}