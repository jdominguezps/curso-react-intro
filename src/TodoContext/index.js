import React from 'react';
import { useLocalStorage } from './useLocalStorage.js';

const TodoContext = React.createContext();

function TodoProvider({children}) {
    const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;
  
    const searchedTodos = todos.filter(
      (todo) => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLocaleLowerCase();
        return todoText.includes(searchText);
      }
      );
  
    const addTodo = (text) => {
      const newTodos = [...todos];
      const new_id = Math.max(...todos.map((todo)=>todo.id),0)+1;
      newTodos.push({ id: new_id, text, completed: false });
      saveTodos(newTodos);
    };

    const completeTodo = (id) => {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex(
        (todo) => todo.id === id
      );
      newTodos[todoIndex].completed = true;
      saveTodos(newTodos);
    };
    
    const deleteTodo = (id) => {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex(
        (todo) => todo.id === id
      );
      newTodos.splice(todoIndex, 1);
      saveTodos(newTodos);
    };
  
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };
