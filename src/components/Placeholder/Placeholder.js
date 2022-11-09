const Placeholder = (props) => {
    
    const placeholderClicked = () => {
        props.onCardClicked(props.id)
    }
    return(
        <li  className="productList__Item">
        <button onClick={placeholderClicked} className="productList__button">{props.buttonSymbol || "*"}</button>
        <p className="productList__text">{props.butttonText || "lorem Ipsum"}</p>
    </li>
    )
}
export default Placeholder