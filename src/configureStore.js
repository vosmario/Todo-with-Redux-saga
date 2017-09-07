import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import todos from './reducers'
import {createLogger} from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware()
    const middlewares = [thunk, sagaMiddleware]

    if(process.env.NODE_ENV !== 'production'){
        middlewares.push(createLogger())
    }
    
    const store = createStore(
        todos,
        applyMiddleware(...middlewares)
    )
    
    sagaMiddleware.run(rootSaga)
    
    return store
}


export default configureStore
