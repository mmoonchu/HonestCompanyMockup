import React from 'react'
import SkincareBanner from './SkincareBanner/SkincareBanner'
import SkincareCategories from './SkincareCategories/SkincareCategories'

function SkincareHeader() {
  return (
    <div className='skincare-header'>
        <SkincareBanner />
        <SkincareCategories />
    </div>
  )
}

export default SkincareHeader