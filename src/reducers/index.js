import {combineReducers} from 'redux'
import byId, * as  fromById from './byId'
import createList, * as fromlist from './createList'


const listByFilter = combineReducers({
    all: createList('all'),
    active: createList('active'),
    completed: createList('completed')
})

const todos = combineReducers({
    byId,
    listByFilter
})

export default todos


export const getVisibleTodos = (state, filter) => {
    const ids = fromlist.getIds(state.listByFilter[filter])
    return ids.map(id => fromById.getTodo(state.byId, id))
}


export const getIsFetching = (state, filter) => 
    fromlist.getIsFetching(state.listByFilter[filter])



export const getErrorMessage = (state, filter) => 
fromlist.getErrorMessage(state.listByFilter[filter])