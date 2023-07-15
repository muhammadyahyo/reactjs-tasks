import React, { Component } from 'react';
import "./index.css"

class NavBottom extends Component {
    render() {
        return (
            <div className='container nav-bottom'>
                
                    <input className='nav-input' type={"text"} placeholder="Enter an address, neighborhood, city, or ZIP code"/>
                    <button className='nav-advanced'>
                        <img src={require('./img/setting-lines.png' )}/>
                        Advanced
                    </button>
                    <button className='nav-search'>
                         <img src={require('./img/001-loupe.png' )}/>
                        Search
                    </button>

            </div>
        );
    }
}

export default NavBottom;