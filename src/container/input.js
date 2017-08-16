import React, {Component, PropTypes} from 'react'
import inputComponent from '../component/input';
import {add} from '../reducer/todo';
import checkAll from 'checkAll';
import {connect} from 'react-redux'

class inputContainer extends Component{
    static PropTypes = {
        submit: PropTypes.func,
        message: PropTypes.object
    }

    constructor(){
        super(props)
        this.state = {
            message: ''
        }
    }

    handleSubmit(){
        if(this.props.submit){
            this.props.submit(this.state.message)
        }
    }

    render(){
        return (
            <inputComponent submit={this.handleSubmit.bind(this)}/>
        )
    }
}

const mapStateToProps = (state)=>{
    return {message: state.message}
}

const mapDispatchToProps = (dispatch)=>{
    return {
        submit: (message)=>{
            dispatch(add(message))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(inputContainer)

