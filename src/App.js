import React from 'react';
import './App.css';
import DForm from './Components/DForm'
import data from './Data/data.json'
class App extends React.Component {
  state = {
    jdata : {
    "firstName":
        {
            "type":"string",
            "required":true
        },
        "lastName":
        {
            "type":"string",
            "required":true
        },
        "age":
        {
            "type":"number",
            "required":true
        },
    "address":{
        "type":"object",
        "schema":{
            "addressLine1":{"type":"string","required":true},
            "addressLine2":{"type":"string","required":true},
            "city":{"type":"string","required":true},
            "state":{"type":"string","required":true},
            "pincode":{"type":"number","required":true}
        }
    }
  }
  }
  onSubmit = (info) => {
    localStorage.setItem('data-',JSON.stringify(info) )
    console.log(JSON.stringify(info))
  }
  onChange = (e) => {
    let val = JSON.parse(e.target.value)
    this.setState({
      jdata: val
    })
  }
  render(){
    return (
      <div className="App">
        <div>
        <textarea
         id="formdata"
         name="formdata" 
         rows="20"
         cols="150"
         onChange = {e => this.onChange(e)}
        >
        </textarea>
        </div>
        <div>
        <DForm
        title = "Dynamic Form"
        data = {this.state.jdata}
        onSubmit = {(data) => {this.onSubmit(data)}}
        />
        </div>
      </div>
    );
  }
}

export default App;
