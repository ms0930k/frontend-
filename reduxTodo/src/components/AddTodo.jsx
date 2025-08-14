import React from 'react';

function AddTodo({ addTodo }) {
  let input;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.value.trim()) {
      addTodo(input.value);
      input.value = '';
    }
  };

  return (
    <form onSubmit={addTodoHandler}>
      <input
        ref={(node) => (input = node)}
        placeholder="Add a new todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}