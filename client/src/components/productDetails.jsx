import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

class ProductDetails extends PureComponent {
  static propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  })).isRequired
}

  render() {
    const {product} = this.props
    return (
      <div>
        <h1>{ product.name }</h1>
        <p>€ { product.price }</p>
        <button>Buy this product</button>
      </div>
    )
  }
}

export default ProductDetails
