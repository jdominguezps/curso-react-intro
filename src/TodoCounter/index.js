import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const {completedTodos,totalTodos} = React.useContext(TodoContext);

    let TodoReturn = "";
    const TodoCompleted = completedTodos;

    if(totalTodos <= 0){
      TodoReturn = "No hay ToDo's para mostrar";
    }
    else if(TodoCompleted === totalTodos){
      TodoReturn = "Felicidades has completado todos los ToDo's";
    }
    else{
      TodoReturn = "Has completado " + TodoCompleted + " de " + totalTodos + " ToDo's";
    };

    return (
      <h1 className='TodoCounter'>
        <span>{TodoReturn}</span>
      </h1>);
  }

export { TodoCounter };
