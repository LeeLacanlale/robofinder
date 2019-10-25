import React from 'react';

const SearchBox = (props) => {
  return (
    <div>
      <input 
        className='pa3 ba b--blue bg-light-green'
        type='search'
        placeholder='Enter Robot Name' 
        onChange={props.searchChange}
      />
    </div>
  );
}

export default SearchBox;