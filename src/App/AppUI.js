import React from 'react';
import { TodoCounter } from '../TodoCounter/index';
import { TodoSearch } from '../TodoSearch/index';
import { TodoList } from '../TodoList/index';
import { TodoItem } from '../TodoItem/index';
import { CreateTodoButton } from '../CreateTodoButton/index';
import { TodosLoading } from '../TodosLoading/index';
import { TodosError } from '../TodosError/index';
import { EmptyTodos } from '../EmptyTodos/index';
import { TodoForm } from '../TodoForm/index';
import { Modal } from '../Modal/index';
import { TodoContext } from '../TodoContext';
import logo from './logo_app.jpg';

function AppUI() {
const {
  loading,
  error,
  searchedTodos,
  completeTodo,
  deleteTodo,
  openModal,
  setOpenModal
} = React.useContext(TodoContext);

    return (
        <React.Fragment>
          <img src={logo} className="App-logo" alt="logo"/>
          <TodoCounter />
          <TodoSearch />

          <TodoList>
            {loading && (
              <>
              <TodosLoading />
              <TodosLoading />
              <TodosLoading />
              </>
            )}
            {error && <TodosError />}
            {(!loading && searchedTodos.length === 0) && <EmptyTodos />}

            {searchedTodos.map(todo => (
              <TodoItem
               key={todo.id}
               text={todo.text}
               completed={todo.completed}
               onComplete={() => completeTodo(todo.id)}
               onDelete={() => deleteTodo(todo.id)}
               />
            ))}
          </TodoList>

          <CreateTodoButton 
            setOpenModal={setOpenModal}
          />

            {openModal && (
              <Modal>
                <TodoForm />
              </Modal>
            )}
        </React.Fragment>
      );
}

export { AppUI };
