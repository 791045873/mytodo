import React, {Component, PropTypes} from 'react'

class showComment extends Component{
    static PropTypes = {
        message: PropTypes.array,
        delete: PropTypes.func
    }

    handlerDelete(){
        if(this.props.deleteMessage){
            this.props.deleteMessage(this.props.index)
        }
    }

    handleDone(){
        if(this.props.haveDone){
            this.props.haveDone(this.props.index)
        }
    }

    render(){
        return(
            <div>
                <p>{this.props.message}</p>
                <button onClick={this.handlerDelete.bind(this)}>delete</button>
                <button onClick={this.handleDone.bind(this)}>Done</button>
            </div>
        )
    }
}

export default showComment