import todoActionsTypes from "./todo.type";

export const addTodo = item => ({
    type: todoActionsTypes.ADD_TODO,
    payload: item
})

export const removeTodo = item => ({
    type: todoActionsTypes.REMOVE_TODO,
    payload: item
})