import ShowControl from '../component/showControl'
import React, {PropTypes, Component} from 'react'
import {change_status} from '../reducer/todo'
import {connect} from 'react-redux'

class ShowControlContainer extends Component{
    static PropTypes = {
        switchMessage: PropTypes.func,
        show: PropTypes.string
    }

    handlerControl(status){
        if(status&&this.props.switchMessage){
            this.props.switchMessage(status)
        }
    }

    render(){
        return <ShowControl handlerControl={this.handlerControl.bind(this)}/>
    }
}

const mapStateToProps=(state)=>{
    return {
        show: state.show
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        switchMessage: (status)=>{dispatch(change_status(status))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShowControlContainer)