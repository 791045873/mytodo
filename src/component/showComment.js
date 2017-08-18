import React, {Component, PropTypes} from 'react'

class showComment extends Component{
    static PropTypes = {
        message: PropTypes.array,
        delete: PropTypes.func
    }

    constructor(){
        super()
    }

    handlerDelete(){
        if(this.props.delete){
            this.props.delete(this.props.index)
        }
    }

    render(){
        return(
            <div>
                <p>{this.props.message.value}</p>
                <button onClick={this.handlerDelete.bind(this)}>delete</button>
            </div>
        )
    }
}

export default showComment