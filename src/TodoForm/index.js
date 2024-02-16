import React from 'react';
import './TodoForm.css';

function TodoForm(){
    return(
        <form>
            <label>Agrega un nuevo TODO</label>
            <textarea
                placeholder="Inserta aqui..."
            />

            <div className="TodoForm-buttonContainer">
                <button
                    className="TodoForm-button
                    TodoForm-button--cancel"
                >Cancelar</button>
                <button
                    className="TodoForm-button
                    TodoForm-button--add"
                >Agregar</button>
            </div>
        </form>
    );
};

export { TodoForm };
