import ProductCard from "../ProductCard/ProductCard";
import "./RightPane.css";

import Placeholder from "../Placeholder/Placeholder";

const RightPane = ({headerText, buttonSymbol, butttonText, productCards, onButtonClicked, onProductCardClicked}) => {
    
    let addProduct = () => {
        onButtonClicked();
    }

    let onCardClicked = (idFromcard) => {
            onProductCardClicked(idFromcard);
    }

    let productCardsToBeRenderd = productCards.map(product =>{
       if(product.name === "Placeholder"){     
       return <Placeholder  id={product.id} onCardClicked={onCardClicked} buttonSymbol="+" butttonText="voeg tekst toe"/>;
    }
    return  <ProductCard  onCardClicked={onCardClicked} key={product.id} name={product.name} id={product.id} productImg={product.img}/>
    ;

});
    
    return (
        <section className="productWrapper">
            <header className="header">
                <h1 class="header__h1">{headerText || "placeholder"}</h1>

            </header>
            <ul className="productList">
               {productCardsToBeRenderd}

            </ul>

        </section>
    );

}

export default RightPane;