import React from 'react';

export const TodoPanel = () => {
  return (
    <div>
      <div>
        <label htmlFor="">
          <div>Name</div>
          <input type="text" />
        </label>
      </div>
      <div>
        <label htmlFor="">
          <div></div>
          <input type="text" />
        </label>
      </div>
      <div>
        <button>ADD</button>
      </div>
    </div>
  )
}