import React from 'react'

const Search = ({ searchQuery, setSearchQuery }) => {
  return (
    <form
      action="#"
      className='flex'
      >
      <input
        type="search"
        name=""
        id=""
        placeholder="Search meals..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className='px-4 py-2 border border-[#dcca878f] font-Open bg-transparent w-fit text-white caret-white placeholder:text-white outline-none'
      />
      <button type="submit" className='btn'>
        Search
      </button>
    </form>
  )
}

export default Search
