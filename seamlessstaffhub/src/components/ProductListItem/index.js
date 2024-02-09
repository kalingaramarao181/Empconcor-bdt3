import "./index.css"

const ProductListItem = (props) => {
    const {productDetails, gettingProductItem} = props
    const {productId, productName} = productDetails

    const onClickProductItem = () => {
        gettingProductItem(productId)
    }

    return (
            <li className="product-list-item">
                <button  className="product-item-button"  onClick={onClickProductItem} type="button">{productName}</button>
            </li>
            )
}

export default ProductListItem 