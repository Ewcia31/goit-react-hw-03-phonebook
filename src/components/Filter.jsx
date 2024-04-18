import React from 'react';

function Filter({ filter, setFilter }) {
  return (
    <div>
      <label>
        Find contacts by name
        <input
          type="text"
          placeholder="Search Contacts"
          value={filter}
          onChange={event => setFilter(event.target.value)}
        />
      </label>
    </div>
  );
}

export default Filter;
