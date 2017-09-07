import {put, takeEvery, call} from 'redux-saga/effects'
import {fetchTodos} from '../api'

export function* watchFetchTodos(){
    yield takeEvery('FETCH_TODOS_REQUEST', workerFetchTodos)
}

export function* workerFetchTodos(payload){
    try{
        const response = yield call(fetchTodos, payload.filter)
        yield put({type: 'FETCH_TODOS_SUCCESS', response: response, filter: payload.filter})
    }catch(e){
        yield put({type: 'FETCH_TODOS_FAILURE', response: payload.filter})
    }
}
