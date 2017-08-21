import React, {PropTypes, Component} from 'react'
import ShowList from '../component/showList'
import {connect} from 'react-redux'
import deleteMessage from '../reducer/todo'

class ShowListContainer extends Component{
    static defaultProps = {
        message:[]
    }

    static PropTypes = {
        deleteMessage: PropTypes.func,
        message: PropTypes.array
    }

    constructor(){
        super()
        this.state = {
            message: []
        }
    }

    filterMessage(message,show) {
        if (message) {
            if(show === 'all'){
                return message
            }
            let filteredMessage = []
            message.forEach((e) => {
                if (e.show === show) {
                    filteredMessage.push(e)
                }
            })
            return filteredMessage
        }
    }

    componentWillReceiveProps(nextProps){
        let message = this.filterMessage(nextProps.message,nextProps.show)
        this.setState({message})
    }

    handleDeleteMessage(index){
        if(this.props.deleteMessage){
            this.props.deleteMessage(index)
        }
    }

    render(){
        return  <ShowList message={this.state.message} deleteMessage={this.handleDeleteMessage.bind(this)}/>
    }
}

const mapStateToProps = (state)=>{
    return {
        message: state.message,
        show: state.show
    }
}

const mapDispatchToProps = (dispatch)=>{
    console.log(deleteMessage);
    return {
        deleteMessage: (index)=>{
            dispatch(deleteMessage.deleteMessage(index))
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ShowListContainer)
