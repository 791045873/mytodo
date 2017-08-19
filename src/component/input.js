import React, {Component, PropTypes} from 'react'

class input extends Component{
    static PropTypes = {
        submit: PropTypes.func
    }

    constructor(){
        super()
        this.state = {
            message: ''
        }
    }

    handleInput(event){
        this.setState({
            message: event.target.value
        })
    }

    handlerSubmit(event){
        if(event.keyCode !== 13 || event.target.value === ""){
            return
        }
        if(this.props.submit){
            this.props.submit(this.state.message)
        }
    }

    render(){
        return (
            <input value={this.state.message} onChange={this.handleInput.bind(this)} onkeyup={this.handlerSubmit.bind(this)}/>
        )
    }
}

export default input