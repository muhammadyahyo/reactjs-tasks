import React from "react";
import { database } from "./mock";
import './App.css'

let base = database;

class Lesson4 extends React.Component{
    constructor(prop){
        super(prop)
        this.state = {
            name: "",
            status: "",
            students: database,
            search: "id",
            active: null
        }
    }
    render(){
        const {students} = this.state
        const change =(e)=>{
            this.setState({
                [e.target.name]: e.target.value
            })
        }
        const search =({target: {value}})=>{
            let filtered = database.filter(s => `${s[this.state.search]}`.toLowerCase().includes(value.toLowerCase()))
            this.setState({
                students: filtered
            })
        }

        const onDelete =(id)=>{
            let res = students.filter(v => v.id !== id);
            this.setState({
                students: res
            })
        }

        function* generateId(){
            let length = students.length;
            while(true){
              let gn =  yield ++length
              if(gn) length +=gn
            }
        }

        const onAdd =()=>{
          let user = {
            id: Date.now(),
            name: this.state.name,
            status: this.state.status
          }  
          this.setState({
            students: [...this.state.students, user],
            name: "",
            status: ""
          })
        }

        const onSelect =({target: {value}})=>{
            this.setState({
                search: value
            })
        }

        const onEdit=({id, name, status}, isSave)=>{
            if(isSave){
                let res = this.state.students.map((value) =>
                  value.id === this.state.active.id
                    ? {
                        ...value,
                        name: this.state.name,
                        status: this.state.status,
                      }
                    : value
                );
                this.setState({
                    active: null,
                    students: res,
                })
            } else {
                this.setState({
                    name: name,
                    status: status,
                    active: {id, name, status},
                })
            }
        }



        return <div>
            <h1>State || 2</h1>
            <h3>Name: {this.state.name}</h3>
            <h3>Status:{this.state.status}</h3>

            <input value={this.state.name} type="text" name="name" onChange={change} placeholder="name"/>
            <br/>
            <input value={this.state.status} type="text" name="status" onChange={change} placeholder="Status"/>
            <button onClick={onAdd}>Add</button>
            <hr/>

            <select onChange={onSelect} name="">
                <option value={"id"}>ID</option>
                <option value={"name"}>Full name</option>
                <option value={"status"}>Status</option>

            </select>

            <input onChange={search} type={"text"} placeholder="Search"/>

            <hr/>
            {/* <input type="text"  onChange={search} placeholder="Type search"/> */}

            <table border={"1"} width="100%">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Delete</th>
                        <th>Edite</th>
                    </tr>
                </thead>
                <tbody>
                    { this.state.students.length ? 
                    students.map(({id, name, status})=> {
                    return (
                      <tr key={id}>
                        <td>{id}.</td>
                        <td>
                          {this.state.active?.id === id ? (
                            <input
                              value={this.state.name}
                              onChange={change}
                              name={"name"}
                              type="text"
                            />
                          ) : (
                            name
                          )}
                        </td>
                        <td>
                          {this.state.active?.id === id ? (
                            <input
                              value={this.state.status}
                              onChange={change}
                              name={"status"}
                              type={"text"}
                            />
                          ) : (
                            status
                          )}
                        </td>
                        <td>
                          <button onClick={() => onDelete(id)}>delete</button>
                        </td>
                        <td>
                          <button
                            onClick={() =>
                              onEdit(
                                { id, name, status },
                                this.state.active?.id === id
                              )
                            }
                          >
                            {this.state.active?.id === id ? "save" : "edit"}
                          </button>
                        </td>
                      </tr>
                    );
                
                

                }) : <th colSpan={5}>
                    <h1>No data</h1>
                </th> 
                }
                </tbody>
                </table>


            
            </div>
    }
}

export default Lesson4