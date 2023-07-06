import React from 'react'
import './App.css'


class Card extends React.Component {
    render(){
        const {data} = this.props
        return(
            
            <div className='card'>
                    <img src={require(`${data.url}`)} class="card-img" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">{data.name }  </h5>
                    </div>
            </div>
        ) 
    }
}

export default Card