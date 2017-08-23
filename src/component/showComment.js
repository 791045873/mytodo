import React, {Component, PropTypes} from 'react'

class showComment extends Component{
    static PropTypes = {
        message: PropTypes.array,
        delete: PropTypes.func
    }

    constructor(){
        super()
        this.state = {
            show: 'DOING'
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.show){
            this.showText(nextProps.show)
        }
    }

    componentWillMount(){
        this.showText(this.props.show)
    }

    showText(value){
        if(value){
            this.setState({show:value})
        }
    }

    handlerDelete(){
        if(this.props.deleteMessage){
            this.props.deleteMessage(this.props.index)
        }
    }

    handleDone(){
        if(this.props.done){
            this.props.done(this.props.index,this.props.show)
            if(this.props.show === 'DONE'){
                this.showText('DOING')
            }else {
                this.showText('DONE')
            }
        }
    }

    render(){
        return(
            <div>
                <p>{this.props.message}</p>
                <button onClick={this.handlerDelete.bind(this)}>delete</button>
                <button onClick={this.handleDone.bind(this)}>{this.state.show}</button>
            </div>
        )
    }
}

export default showComment