import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => (
  <ul>
    {props.todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        hundleChangeProps={props.hundleChangeProps}
        deleteTodoProps={props.deleteTodoProps}
        setUpdate={props.setUpdate}
      />
    ))}
  </ul>
);

export default TodoList;
