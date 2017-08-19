import ShowComment from './showComment'
import React,{PropTypes, Component} from 'react'

class ShowList extends Component{
    static PropTypes = {
        message: PropTypes.array,
        deleteMessage: PropTypes.func
    }

    constructor(){
        super()

    }

    render(){
        return (
            <div>
                {
                    this.props.message.forEach((obj, index)=>{
                        return <ShowComment message={obj} index={index} deleteMessage={this.props.deleteMessage}/>
                    })
                }
            </div>
        )
    }
}

export default ShowList