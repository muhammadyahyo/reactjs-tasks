import React from 'react'
import './App.css'
import Card from './card';
import {data} from '../mock'

class App extends React.Component {
  render() {
    return <div className='container'>
      
            
              <h1>Fruit</h1>
              <div className='fruits'>
                {
                  data.map(e => {
                    return <Card data= {e} />
                  })
                }
              </div>
            
        
    </div>
  }
}


export default App;
