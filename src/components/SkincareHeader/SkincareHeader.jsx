import React from 'react'
import SortingDropdowns from '../SortingDropdowns/SortingDropdowns'
import SkincareBanner from './SkincareBanner/SkincareBanner'
import SkincareCategories from './SkincareCategories/SkincareCategories'

function SkincareHeader() {
  return (
    <div>
        <SkincareBanner />
        <SkincareCategories />
        <SortingDropdowns />
    </div>
  )
}

export default SkincareHeader