import React, {PropTypes, Component} from 'react'
import index from '../index.css'

class ShowControl extends Component{
    static PropTypes = {
        handlerControl: PropTypes.func
    }

    constructor(){
        super()
    }

    handlerSwitch(event){
        if(!this.props.handlerControl){
            return
        }
        switch (event.target.value){
            case 'ALL':
                this.props.handlerControl('ALL');
                break;
            case 'COMPELETED':
                this.props.handlerControl('COMPELETED')
                break;
            case 'DOING':
                this.props.handlerControl('DOING')
                break;
            default:
                return
        }
        event.target.classList.add('selected')
    }

    render(){
        return (
            <div onClick={this.handlerSwitch.bind(this)} >
                <button>ALL</button>
                <button>COMPELETED</button>
                <button>DOING</button>
            </div>
        )
    }
}

export default ShowControl