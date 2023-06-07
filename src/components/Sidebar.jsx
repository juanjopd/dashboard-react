import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/sales">Ventas</Link>
                </li>
                <li>
                    <Link to="/clients">Clientes</Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;