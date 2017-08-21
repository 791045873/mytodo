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

    filterMessage() {
        if (this.props.message) {
            let Status = this.props.show
            if(Status === 'all'){
                return this.props.message
            }
            let filteredMessage = []
            this.props.message.forEach((e) => {
                if (e.show === Status) {
                    filteredMessage.push(e)
                }
            })
            return filteredMessage
        }
    }

    componentWillReceiveProps(){
        let message = this.filterMessage(this.props.message)
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
