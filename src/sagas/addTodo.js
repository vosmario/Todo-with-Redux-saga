import {call, put, takeEvery} from 'redux-saga/effects'
import {addTodo} from '../api'

export function* watchAddTodo() {
    yield takeEvery('ADD_TODO_START', workerAddTodo)
}

function* workerAddTodo(payload){
    try{
      const response = yield call(addTodo, payload.text)
      yield put({type :'ADD_TODO_SUCCESS', response: response})
    }catch(e){
        console.log('error')
    }
}