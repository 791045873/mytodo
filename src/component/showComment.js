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

    render(){
        return(
            <div>
                <p>{this.props.message}</p>
                <button onClick={this.handlerDelete.bind(this)}>delete</button>
            </div>
        )
    }
}

export default showComment