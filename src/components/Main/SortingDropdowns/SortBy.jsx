import React from 'react'

function SortBy() {
  return (
      <select className="sort-by">
          <option value="featured">FEATURED</option>
          <option value="best-sellers">BEST SELLERS</option>
          <option value="price-low-to-high">PRICE LOW TO HIGH</option>
          <option value="price-high-to-low">PRICE HIGH TO LOW</option>
          <option value="new-to-old">DATE, NEW TO OLD</option>
      </select>
  )
}

export default SortBy