import { NavLink} from "react-router-dom";
import './Home.css';

export const Home = () => {

    return(
        <div>
            <h1>Inventario sinag</h1>
            <button><NavLink to = 'sell'>Vender</NavLink></button>
            <button><NavLink to = 'stock'>Stock</NavLink></button>
        </div>
    )
}