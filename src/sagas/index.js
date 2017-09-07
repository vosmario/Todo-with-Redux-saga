import {watchAddTodo} from './addTodo'
import {watchFetchTodos} from './fetchTodos'
import {watchToggle} from './toggleTodo'

export default function* rootSaga () {
    yield [ 
        watchFetchTodos(),
        watchAddTodo(),
        watchToggle()
    ]
}
