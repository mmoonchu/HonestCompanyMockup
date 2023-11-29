import React from 'react'
import "./SkincareCategories.css"

function SkincareCategories() {
    const categories = [
        {
            categoryName: 'CLEANSERS',
            image: 'https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Library-Sites-HC-content/default/dw8f1c1140/beauty-category-landing-page/skincare/Jacleanser.jpg?sw=300'
        },
        {
            categoryName: 'MOISTURIZERS',
            image: 'https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Library-Sites-HC-content/default/dw17278d15/beauty-category-landing-page/skincare/moisturizer.jpg?sw=300'
        },
        {
            categoryName: 'EYE CREAMS',
            image: 'https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Library-Sites-HC-content/default/dw1b7de834/beauty-category-landing-page/skincare/Jaeyecream.jpg?sw=300'
        },
        {
            categoryName: 'SERUMS',
            image: 'https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Library-Sites-HC-content/default/dwdd26e838/beauty-category-landing-page/skincare/serum.jpg?sw=300'
        },
    ]
    const categoriesJSX = categories.map((category, index) => {
        const categoryID = `category${index}`;
        return (
            <div className='category' id={categoryID}>
                <img className='category-image' src={category.image} />
                <h6 className='category-name'>{category.categoryName}</h6>
            </div>
        )
    })
  return (
    <div className='category-collection'>
        {categoriesJSX}
    </div>
  )
}

export default SkincareCategories