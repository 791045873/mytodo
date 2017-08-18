// action type
const DELETE = 'DELETE'
const ADD = 'ADD'
const CHANGE_STATUS = 'CHANGE_STATUS'

//reducer
function todo(state, action) {
    if(!state){
        state = {
            message: [],
            show: 'all'
        }
    }
    switch (action.type){
        case DELETE:
            return {
                message: [...state.message.slice(0, action.commentIndex),
                    ...state.message.slice(action.commentIndex+1)
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

const del = (index)=>{
    return {
        type: 'delete',
        index
    }
}

const change_status = (status)=>{
    return {
        type: 'CHANGE_STATUS',
        status
    }
}

export default {add, del, change_status, todo}

