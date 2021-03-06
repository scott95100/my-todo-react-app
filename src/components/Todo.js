import React from 'react';

const Todo = (props) => {

    const deleteClickedTodo = ()=> {
        props.deleteTodo(props.todo)
    }

    return (
        <li data-todos-index={props.todo._id}>
            <span className="todo-item">{props.todo.body}</span>
            <spa className="remove" onClick={deleteClickedTodo}>Remove</spa>
        </li> 
    );
}

export default Todo;