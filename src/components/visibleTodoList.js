import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router'
import {getVisibleTodos, getErrorMessage, getIsFetching} from '../reducers'
import * as actions from '../actions'
import FetchError from './fetchError'

class VisibleTodoList extends Component{
    componentDidMount(){
        this.fetchData()
    }

    componentDidUpdate(prevProps){
        if(this.props.filter !== prevProps.filter){
            this.fetchData()
        }
    }

    fetchData() {
        const {filter, fetchTodos } = this.props
        fetchTodos(filter);
    }

    render(){
        const {toggleTodo, errorMessage, todos, isFetching} = this.props
        if(isFetching && !todos.length){
            return <p>Loading...</p>
        }
        if(errorMessage && !todos.length){
            return(
                <FetchError
                    message={errorMessage}
                    onRetry={() => this.fetchData()}
                />
            )
        }
        return (
            <TodoList 
                todos={todos} 
                onTodoClick={toggleTodo}
            />
        )
    }
}


const mapStateToTodoProps = (
    state,
    {params}
) =>{
    const filter = params.filter || 'all'
    return(
        {
            isFetching: getIsFetching(state, filter),
            errorMessage:getErrorMessage(state, filter),
            todos: getVisibleTodos( state,filter),
            filter
        }
    )
    
}


const TodoList = ({
    todos,
    onTodoClick
}) => (
    <ul>
        {todos.map(todo => 
            <Todo
                key = {todo.id}
                {...todo}
                onClick={() => onTodoClick(todo.id)}
            />
        )}
    </ul>
)


const Todo = ({
    onClick,
    completed,
    text
})  => (
    <li 
        onClick={onClick}
        style={{
            textDecoration:
            completed ?
                'line-through' : 
                'none'
        }}
    >
        {text}
    </li>
)

VisibleTodoList = withRouter(connect(
    mapStateToTodoProps,
    actions
)(VisibleTodoList))



export default VisibleTodoList