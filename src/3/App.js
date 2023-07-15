import React from "react";

class Lesson3 extends React.Component{
    constructor(prop){
        super(prop);
        this.state = {
            count: 0,
            text: "",
            language: "uz",
            isDark: true
        }

    }
    render(){
        // let count = 0
        const plus =()=>{
            this.setState({
                count: this.state.count+1
            })
        }
        const minus =()=>{
            this.setState({
                count: this.state.count-1
            })
        }
        const change =({target: {value}})=>{
            this.setState({
                text: value
            })
        }
        const select =({target: {value}})=>{
            this.setState({
                language: value
            })
        }
        const sayHello =(lang)=>{
            switch(lang){
                case "uz" : return "Assalomu alaykum";
                case "ru" : return "Privet";
                case "en" : return "Hello";
                
            }
        }

        const box =()=>{
            this.setState({
                isDark: !this.state.isDark
            })
        }
        return <div style={{background: this.state.isDark ? "green" : "white"}}>
            <h1>Lesson 3 </h1>
            <h3>{this.state.count}</h3>
            <button onClick={plus} >+</button>
            <button onClick={minus}>-</button>
                <br/> <br/> <br/>
                <h2>{this.state.text}</h2>
            <input type="text" onChange={change} placeholder="Type something" />

            <select onChange={select}>
                <option value="uz">Uzbek</option>
                <option value="ru">Russin</option>
                <option value="en">English</option>
            </select>

            <h2>{sayHello(this.state.language)}</h2>

            <input type="checkbox" onClick={box} />
            <span>{this.state.isDark ? "Tungi rejim" : "Kunduzgi rejim"}</span>
        </div>
    }
}

export default Lesson3