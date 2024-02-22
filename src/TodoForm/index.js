import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm() {
    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext);

const [newTodoValue, setNewTodoValue] = React.useState('');

const onSubmit = (event) => {
    event.preventDefault();

    // Valida que el Texto del Todo no se encuentre vacío
    const var_newTodoValue = newTodoValue.trim();
    if (var_newTodoValue.length === 0) return;

    addTodo(var_newTodoValue);
    setOpenModal(false);
};

const onCancel = () => {
    setOpenModal(false);
};

const onChange = (event) => {
    setNewTodoValue(event.target.value);
};

    return(
        <form onSubmit={onSubmit}>
            <label>Agrega un nuevo TODO</label>
            <textarea
                className="NewTodo"
                placeholder="Inserta aqui..."
                value={newTodoValue}
                onChange={onChange}
            />

            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button
                    TodoForm-button--cancel"
                    onClick={onCancel}
                >Cancelar</button>
                <button
                    type="submit"
                    className="TodoForm-button
                    TodoForm-button--add"
                >Agregar</button>
            </div>
        </form>
    );
};

export { TodoForm };
