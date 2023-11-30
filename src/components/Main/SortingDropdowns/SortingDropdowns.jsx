import React from 'react'
import SortBy from './SortBy'
import FilterBy from './FilterBy'
import "./SortingDropdowns.css"

function SortingDropdowns() {
  return (
    <div className='sorting-dropdowns'>
        <FilterBy />
        <SortBy />
    </div>
  )
}

export default SortingDropdowns