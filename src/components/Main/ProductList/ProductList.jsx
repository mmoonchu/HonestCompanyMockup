import React from 'react'
import ProductModel from './ProductModel'
import "./ProductList.css"

function ProductList() {
    const products = [
        new ProductModel('Hydrogel Cream', 'https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dw729e3ecd/images/large/Hydrogel-Cream/Resized_10.30.23/Hydrogel_Resize.jpg?sw=400&sh=400&sm=fit', 21.99, 4.7, '3 sizes', 'BEST SELLER'),
        new ProductModel('Gentle Gel Cleanser', 'https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dwd8d9dc2f/images/large/Gentle-Gel-Cleanser/RestageGentleGel/onwhite/_GENTLE_GEL_CLEANSER_PRIMARY_FRONT_RT.jpg?sw=400&sh=400&sm=fit', 14.99, 4.7, '2 sizes'),
        new ProductModel('Vitamin C Radiance Serum', 'https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dw0ffcff63/images/large/Vitamin-C-Radiance-Serum/Restage-VitmainCSerum/OnWhite/PRIMARY_FRONT.jpg?sw=400&sh=400&sm=fit', 29.99, 4.6, '2 sizes'),
        new ProductModel('Take our skincare quiz to find out which clean beauty products will help you reach your #skingoals', 'https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Library-Sites-HC-content/default/dw6a02018e/marketing-tile/Beauty-Marketing-Tiles/skincare-test.png?sw=400', 'Take Quiz', ''),
        new ProductModel('Never Basic Kit', 'https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dwbb5dfd37/images/large/Never-Basic-Kit/white/NeverBasicSkincareSet_front.jpg?sw=400&sh=400&sm=fit', 19.99, 5.0),
        new ProductModel('Calm on Foaming Cream Cleanser', 'https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dwf6afe389/images/large/Calm-on-foaming-cleanser/BeautyRestage-CalmOnCleanser/OnWhite/_CALM_ON_FOAMING_CREAM_CLEANSER_PRIMARY_FRONT_RT.jpg?sw=400&sh=400&sm=fit', 17.99, 3.9),
        new ProductModel('The Daily Calm Lightweight Moisturizer', 'https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dwb97d06f6/images/large/Daily-calm-moisturizer/Resized_10.30.23/B10DLMV2NOFLS_TDCLMoisturizer__PDP_Front_Resized.jpg?sw=400&sh=400&sm=fit', 29.99, 4.4, '', 'DERMATOLOGIST APPROVED'),
        new ProductModel('Calm & POREfect Serum', 'https://www.honest.com/dw/image/v2/BDBW_PRD/on/demandware.static/-/Sites-HC-master-catalog/default/dw12185a8e/images/large/Calm-and-porefect-serum/Restage-CalmPorefectSerum/OnWhite/Calm_Porefect_white_front.jpg?sw=400&sh=400&sm=fit', 29.99, 4.6, '', 'DERMATOLOGIST APPROVED'),
    ]

    const productsJSX = products.map((product, index) => {
        // console.log(product);
        const productID = `product${index}`;
        const productPrice = typeof product.price === 'number' ? `$${product.price}` : product.price;
        const ratingPercentage = product.rating / 5 * 100;
        // const ratingImageString = `<img style="width:${ratingPercentage}%;" src="https://i.gyazo.com/db0a9552231bc3395e7246fe4eef972f.png" />`
        const ratingString = product.rating ? `${product.rating} stars` : null;
        return (
            <div className='product' id={productID}>
                <div className='product-image-box'>
                    <img className='product-image' src={product.image} />
                    {product.tag !== null && <p className='product-tag'>{product.tag}</p>}
                </div>
                <p className='product-name'>{product.name}</p>
                <p className='product-price'>{productPrice}</p>
                <div className='product-rating'>
                    <p className='product-rating-number'>{ratingString}</p>
                    {/* {document.getElementById(productID).querySelector('.product-rating').innerHTML = ratingImageString} */}
                </div>
                <p className='product-options'>{product.options}</p>
            </div>
        )
    })
  return (
    <div className='product-list'>
        {productsJSX}
    </div>
  )
}

export default ProductList