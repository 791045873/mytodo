import React, {PropTypes, Component} from 'react'
import {connect} from 'react-redux'
import {deleteMessage,done} from '../reducer/todo'
import ShowComment from '../component/showComment'

class ShowListContainer extends Component{
    static defaultProps = {
        message:[]
    }

    static PropTypes = {
        deleteMessage: PropTypes.func,
        done: PropTypes.func,
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
            if(show === 'ALL'){
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
        console.log('componentWillReceiveProps')
        let message = this.filterMessage(nextProps.message,nextProps.show)
        this.setState({message})
    }

    shouldComponentUpdate(nextProps){
        let message = this.filterMessage(nextProps.message,nextProps.show)
        this.setState({message})
        return true
    }

    handleDeleteMessage(index){
        if(this.props.deleteMessage){
            this.props.deleteMessage(index)
        }
    }

    handleDone(index,show){
        if(this.props.done){
            this.props.done(index,show)
        }
        console.log('showListContainer handleDone')
        console.log(this.props)
    }

    render(){
        console.log("showListContainer: ")
        console.log(this.props)
        return  (
            <div>
                {
                    this.props.message.map((obj, index)=>(
                        <ShowComment message={obj.message} show={obj.show} index={index} key={index} deleteMessage={this.handleDeleteMessage.bind(this)} done={this.handleDone.bind(this)}/>
                    ))
                }
            </div>
        )}
}

const mapStateToProps = (state)=>{
    return {
        message: state.message,
        show: state.show
    }
}

const mapDispatchToProps = (dispatch)=>{
    console.log(deleteMessage,done);
    return {
        deleteMessage: (index)=>{
            dispatch(deleteMessage(index))
        },
        done: (index,show)=>{
            //传递的是原始状态,可是期望的参数是变化后的状态
            show === 'DOING'?show='DONE':show='DOING'
            dispatch(done(index,show))
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ShowListContainer)
