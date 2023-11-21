/* eslint-disable react/prop-types */
import { useState } from 'react';

const Navbar = ({ onSearch }) => {

  const [search, setSearch] = useState('')
  const handleInputChange = (event) => {
    setSearch(event.target.value)
  }
  
  const handleEventClickDown = (event) => {
    if (event.key === 'Enter') {
      onSearch(search)
    }
  }

  const handleButtonClick = () => {
    onSearch(search)
  }

  return (
    <div className='header'>
      <h1>Events</h1>
      <div className='nav'>
        <input 
          placeholder="Search for an event" 
          onChange={handleInputChange} 
          onKeyDown={handleEventClickDown}
          value={search}
        />
        <button onClick={handleButtonClick}>Search</button>
      </div>
    </div>
  )
  
}

export default Navbar;