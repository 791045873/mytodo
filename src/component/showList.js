import ShowComment from './showComment'
import React,{PropTypes, Component} from 'react'

class ShowList extends Component{
    static PropTypes = {
        message: PropTypes.array,
        deleteMessage: PropTypes.func
    }

    render(){
        return (
            <div>
                {
                    this.props.message.map((obj, index)=>(
                        <ShowComment message={obj.message} index={index} key={index} deleteMessage={this.props.deleteMessage}/>
                    ))
                }
            </div>
        )
    }
}

export default ShowList