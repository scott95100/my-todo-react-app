import React, { useState } from 'react';

const CreateTodoForm = (props) => {
    const [todo, setTodo] = useState('')

    const onInputChange = (event)=> {
        // the value yes event.target.value
        setTodo(event.target.value)
    }

    const onFormSubmit = (event)=> {
        event.preventDefault()
        // body: e.target.value
        // completed: false
        //call a function that is passed down as props
        props.createTodo(todo)
        setTodo('')
    }


    return (
        <div>
            <form onSubmit={ onFormSubmit }>
                <input 
                  onChange={ onInputChange }
                  type="text" id="newItemDescription"
                  placeholder="New todo here"
                  value={todo}
                />
                <button type="submit" id="addTask" className='btn'>Add todo</button>
            </form>
        </div>
    );
}

export default CreateTodoForm;
