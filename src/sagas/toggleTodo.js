import {put, takeEvery, call} from 'redux-saga/effects'
import {toggleTodo} from '../api'

export function* watchToggle(){
    yield takeEvery('TOGGLE_TODO_START', workerToggleTodo)
}

export function* workerToggleTodo(payload){
    try{
        const response = yield call(toggleTodo, payload.id)
        yield put({type: 'TOGGLE_TODO_SUCCESS', response: response})
    }catch(e){
        
    }
}
