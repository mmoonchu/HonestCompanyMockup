import React from 'react'
import SkincareHeader from '../../components/SkincareHeader/SkincareHeader'
import ProductList from '../../components/ProductList/ProductList'

function Skincare() {
  return (
    <div className='skincare-main'>
        <SkincareHeader />
        <ProductList />
    </div>
  )
}

export default Skincare