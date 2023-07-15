import React, { Component } from 'react';
import Nav from './Component/Nav';
import NavBottom from './Component/NavBottom';
import "./style.css"

class Houzing extends Component {
    render() {
        return (
            <div className=''>
                <Nav />
                <NavBottom />
            </div>
        );
    }
}

export default Houzing;