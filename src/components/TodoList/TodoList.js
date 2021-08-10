import React from 'react';
import { connect } from 'react-redux';
import { removeTodo } from '../../redux/todo/todo.actions';
import BasicCard from '../Card/BasicCard';

function TodoList({ todos , removeTodo}) {
    return (
        todos.map((todo, i) => (
            <BasicCard key={i}>
                <h3>{todo.title}</h3>
                <p>{todo.text}</p>
                <button onClick={()=>removeTodo(todo)}>Delete</button>
            </BasicCard>
        ))
    )
}


const mapStateToProps = (state) => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => ({
    removeTodo: todo => dispatch(removeTodo(todo))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);