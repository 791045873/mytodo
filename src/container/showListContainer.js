import React, {PropTypes, Component} from 'react'
import showList from '../component/show'
import statuControl from 'statuControl'

class showList extends Component{
    constructor(){
        super()
    }

    checkMessage() {
        if (this.props.message) {
            let Statu = this.props.message.show
            let checkedMessage = []
            this.props.message.message.forEach((e) => {
                if (e.show === Statu) {
                    checkedMessage.push(e)
                }
            })
            return checkedMessage
        }
    }
    render(){
        return(
            <div>
                <showList message={this.checkMessage.bind(this)}/>
            </div>

        )
    }
}

export default showList