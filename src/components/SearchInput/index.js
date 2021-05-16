import React,{useRef} from 'react'

import './index.css'

const SearchInput = ({setPostsArray,renderPosts}) => {
    const searchFieldRef = useRef()
    const filterByNameAndSetArray = () => {
        searchFieldRef.current.value && setPostsArray(prevState => prevState.filter(el => el.title === searchFieldRef.current.value ))
        ! searchFieldRef.current.value && renderPosts()
    }
    return <input className='search-input' ref={searchFieldRef} onChange={filterByNameAndSetArray} placeholder='Search by title(Enter full title)' />
}

export default SearchInput;