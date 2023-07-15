import React, { Component } from 'react';
import "./index.css"

class Nav extends Component {
    render() {
        return (
            <div className='nav-background'>
                <div className='container nav'>
                <img className='nav-logo' src={require("./img/logo.png")} />
                <ul className='nav-ul'>
                    <li className='nav-li'>
                        <a href='#' className='nav-link'>Home</a>
                    </li>
                    <li className='nav-li'>
                        <a href='#' className='nav-link'> Properties</a>
                    </li> 
                    <li className='nav-li'>
                        <a href='#' className='nav-link'>Contacts</a>
                    </li>
                </ul>
                <a href='#' className='nav-btn'>Login</a>

                </div>
            </div>
        );
    }
}

export default Nav;