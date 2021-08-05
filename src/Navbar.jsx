import React from 'react'
import logo from './components/logo.png'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <div className="wrap">
                <div className="navbar">
                    <div className="logo">

                        <NavLink to='/'><img className='logoimg' src={logo} alt="Khel Equipo Logo">
                        </img></NavLink>
                    </div>
                    <nav>

                        <ul id="MenuItems">
                            <li className="navbarnav"><NavLink to="/">Home</NavLink></li>
                            <li className="navbarnav"><NavLink to="/add">Add</NavLink></li>
                            <li className="navbarnav"><NavLink to="/subtract">Subtract</NavLink></li>
                            <li className="navbarnav"><NavLink to="/multiply">Multiply</NavLink></li>
                            <li className="navbarnav"><NavLink to="/divide">Divide</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}


export default Navbar
