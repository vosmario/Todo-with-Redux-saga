import {v4} from 'node-uuid'
import * as api from '../api'
import {getIsFetching} from '../reducers'
/*
export const fetchTodos = (filter) =>(dispatch, getState)=>{
    if(getIsFetching(getState(), filter)){
        return Promise.resolve()
    }
    dispatch({
        type: 'FETCH_TODOS_REQUEST',
        filter
    })
    return api.fetchTodos(filter).then(response => {
        dispatch({
            type: 'FETCH_TODOS_SUCCESS',
            filter,
            response: normalize(response, schema.arrayOfTodos)
        })
    },
    error => {
        dispatch({
            type:'FETCH_TODOS_FAILURE',
            filter,
            message: error.message || 'Something went wrong'
        })
    })
}
*/


export const fetchTodos = (filter) => ({
    type: 'FETCH_TODOS_REQUEST',
    filter
})


export const addTodo = (text) => ({
    type: 'ADD_TODO_START',
    text,
})

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO_START',
    id
})


/*
export const toggleTodo = (id) => (dispatch) => 
    api.toggleTodo(id).then(response => {
        dispatch({
            type:'TOGGLE_TODO_SUCCESS',
            response: normalize(response, schema.todo)
        })
    })
*/
