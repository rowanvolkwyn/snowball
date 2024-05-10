import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div id='navbar'>
                <NavLink to='/'>Simple Calculator</NavLink>
                <NavLink to='/complex'>Complex Calculator</NavLink>
                <NavLink to='/investment'>Investment Calculator</NavLink>
        </div>
    )
}

export default Navbar;