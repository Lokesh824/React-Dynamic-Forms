import React from 'react'

export default class DForm extends React.Component{
    state = {}
    constructor(props){
        super(props)
    }
    onChange = (e, key) => {
        this.setState({
            [key] : e.target.value
        })
    }
    onSubmit = (e) =>{
        e.preventDefault();
        if(this.props.onSubmit) this.props.onSubmit(this.state)
    }
    renderForm = (data) =>{
        let formUI = Object.keys(data).map(d => {
            let type = data[d].type
            if(data[d].type === 'string'){
                type = 'text'
            }
            else if(data[d].type === 'boolean'){
                type = 'checkbox'
            }
            let required = data[d].required || false
            return(
                <div key = {'od_'+d}>
                    {
                        type === "object" ?
                            this.renderForm(data[d].schema)
                        :
                            <div key = {'id_'+d}>
                                <label key = {'lbl_'+d}>{d}</label>
                                <input 
                                    key = {'ipt_'+d} 
                                    type = {type}
                                    required = {required}
                                    onChange = {e => this.onChange(e, d)}
                                />
                            </div>
                    }
                </div>
            )

        })
        return formUI 
    }
    render(){
        return(
            <div>
                <h2>{this.props.title}</h2>
                <form onSubmit ={e => this.onSubmit(e)}>
                    <div>
                        {this.renderForm(this.props.data)}
                        <button type="submit">Save to local storage</button>
                    </div>
                </form>
            </div>

        )
    }
}