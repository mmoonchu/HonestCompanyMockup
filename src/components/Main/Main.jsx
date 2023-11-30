import React from 'react'
import SortingDropdowns from '../SortingDropdowns/SortingDropdowns'
import ProductList from '../ProductList/ProductList'
import "./Main.css"

function Main() {
  return (
    <div className='main'>
        <SortingDropdowns />
        <ProductList />
    </div>
  )
}

export default Main