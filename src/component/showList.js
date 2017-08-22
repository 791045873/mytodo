import ShowComment from './showComment'
import React,{PropTypes, Component} from 'react'

class ShowList extends Component{
    static PropTypes = {
        message: PropTypes.array,
        deleteMessage: PropTypes.func,
        done: PropTypes.func
    }

    render(){
        console.log("showList: " + this.props)
        console.log(this.props)
        return (
            <div>
                {
                    this.props.message.map((obj, index)=>(
                        <ShowComment message={obj.message} show={obj.show} index={index} key={index} deleteMessage={this.props.deleteMessage} done={this.done.bind(this)}/>
                    ))
                }
            </div>
        )
    }
}

export default ShowList