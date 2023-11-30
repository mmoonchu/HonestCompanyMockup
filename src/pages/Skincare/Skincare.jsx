import React from 'react'
import SkincareHeader from '../../components/SkincareHeader/SkincareHeader'
import Main from '../../components/Main/Main'
import "./Skincare.css"

function Skincare() {
  return (
    <div className='skincare-main'>
        <SkincareHeader />
        <Main />
    </div>
  )
}

export default Skincare