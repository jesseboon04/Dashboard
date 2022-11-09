const ProductCard = (props) => {
   

    const productCardClicked = () => {
        props.onCardClicked(props.id)
    }
   
    return (
        <li  onClick={productCardClicked} className="productList__Item productList__Item--gray">
            <img className="productList__img" src={props.productImg} alt={props.name} />
            <div className="productList__fade">
                <p className="productList__imageText">{props.name}</p>
            </div>
        </li>
    )
}

export default ProductCard