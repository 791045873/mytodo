// action type
const DELETE = 'DELETE';
const ADD = 'ADD';
const CHANGE_STATUS = 'CHANGE_STATUS';
const DONE = 'DONE';
const DOING = 'DOING';

//reducer
function reducer(state, action) {
    if(!state){
        state = {
            message: [],
            show: 'ALL'
        }
    }
    switch (action.type){
        case DELETE:
            return {
                message: [...state.message.slice(0, action.index),
                    ...state.message.slice(action.index+1)
                ],
                show: state.show
            };
        case ADD:
            return {
                message: [
                    ...state.message,
                    action.message
                ],
                show: state.show
            };
        case CHANGE_STATUS:
            return{
                message: state.message,
                show: action.show
            };
        case DONE:
            state.message[action.index].show = DONE;
            return state;
        case DOING:
            state.message[action.index].show =  DOING;
            return state;

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
};

const deleteMessage = (index)=>{
    return {
        type: 'DELETE',
        index
    }
};

const change_status = (show)=>{
    return {
        type: 'CHANGE_STATUS',
        show
    }
};

const done = (index,show)=>{
    return {
        type: show,
        index
    }
};

export {add, deleteMessage, change_status, reducer, done};


