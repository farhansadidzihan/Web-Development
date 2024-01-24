import React from 'react';

export const TodoItem = ({ todo, title, desc, onDelete }) => {
  return (
    <div className='container'>
      <h5 className='text-center' style={{color: 'blue'}}> {title} </h5>
      <p> {desc} </p>
      <button className='btn btn-sm btn-danger' onClick={() => {onDelete(todo)}}> Delete </button>
    </div>
  );
};
