import todoActionsTypes from "./todo.type";

const INITIAL_STATE = [
    {
        title: 'test',
        text: 'test test test'
    }
]

const todoReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case todoActionsTypes.ADD_TODO:
            return [...state, action.payload];
        case todoActionsTypes.REMOVE_TODO:
            return state.filter(todoItem => todoItem.title !== action.payload.title);
        default:
            return state; 
    }
}

export default todoReducer;