// action type
const DELETE = 'DELETE'
const ADD = 'ADD'
const CHANGE_STATUS = 'CHANGE_STATUS'
const DONE = 'DONE'

//reducer
function reducer(state, action) {
    if(!state){
        state = {
            message: [],
            show: 'all'
        }
    }
    switch (action.type){
        case DELETE:
            return {
                message: [...state.message.slice(0, action.index),
                    ...state.message.slice(action.index+1)
                ],
                show: state.show
            }
        case ADD:
            return {
                message: [
                    ...state.message,
                    action.message
                ],
                show: state.show
            }
        case CHANGE_STATUS:
            return{
                message: state.message,
                show: action.show
            }
        case DONE:
            state.message[index].show = 'DONE'
            return state
        default:
            return state
    }
}

//action creaters
const add = (message)=>{
    return {
        type: 'ADD',
        message
    }
}

const deleteMessage = (index)=>{
    return {
        type: 'DELETE',
        index
    }
}

const change_status = (status)=>{
    return {
        type: 'CHANGE_STATUS',
        status
    }
}

const haveDone = (index)=>{
    return {
        type: 'DONE',
        index
    }
}

export default {add, deleteMessage, change_status, reducer,haveDone};


