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
            let filteredMessage = []
            this.props.message.forEach((e) => {
                if (e.show === Status) {
                    filteredMessage.push(e)
                }
            })
            return filteredMessage
        }
    }

    componentWillMount(){
        this.setState(this.filterMessage(this.props.message))
    }

    render(){
        return  <ShowList message={this.state.message}/>
    }
}

const mapStateToProps = (state)=>{
    return {
        message: state.message
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        deleteMessage: (index)=>{dispatch(deleteMessage(index))}
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ShowListContainer)
