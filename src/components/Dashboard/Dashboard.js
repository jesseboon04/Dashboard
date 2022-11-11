import LeftPane from "../LeftPane/LeftPane";
import RightPane from "../RightPane/Rightpane";
import "./Dashboard.css";
import navigationItems from "../../data/navigationItems";
import productsObject from "../../data/Products"
import navigationItemsObject from "../../data/navigationItems";
import Popup from "../Popup/Popup";
import chooseImage from "../../helpers/chooseImage";
import React from "react";




class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            productCards: [],
            open: true,
            cardClicked: {},
            editMode: false,
        }
    }


    addButtonClicked = (inputfromPopup) => {
        let imageFromHelper = chooseImage(inputfromPopup);

        let toBEAdded = [
            {
                id: this.state.productCards.length + 1,
                name: inputfromPopup,
                img: imageFromHelper
            }
        ]
        let mergedArrays = this.state.productCards.concat(toBEAdded);
        this.setState({
            productCards: mergedArrays,
            open: !this.state.open,
        });
    }
    onButtonClicked = () => {
        this.setState({ open: !this.state.open })
    }

    editButtonClicked = (inputfromPopup) => {

     let productCards = this.state.productCards;
      let newState = productCards.map(product => {
        if(this.state.cardClicked.id === product.id){
            product.name = inputfromPopup;
            return product;
        }
        else{
           return product;
        }
     })
     this.setState({productCards: newState, open: true})

    }


    onCardClicked = (idFromcard) => {
        if (this.state.productCards[idFromcard - 1].name === "Placeholder") {
            this.setState({
                editMode: false,
            })

        }
        else {
            this.setState({
                editMode: true,
            })
        }

        this.setState
            (
                {

                    open: !this.state.open,
                    cardClicked: this.state.productCards[idFromcard - 1],

                }
            )
    }

    componentDidMount() {

        this.setState({ productCards: productsObject.products })
    };

    render() {


        if (this.state.open === true) {
            return (<article className="dashboard">
                <LeftPane className="leftpane" navigationListItems={navigationItemsObject.navigationItems} buttonText="Go Premium" />
                <RightPane className="rightpane" onProductCardClicked={this.onCardClicked} onButtonClicked={this.onButtonClicked} productCards={this.state.productCards} headerText={"Mijn Producten"} buttonSymbol="+" butttonText={"Voeg product toe"} />
            </article>
            );
        };

        return (
            <Popup editButtonClicked={this.editButtonClicked} editMode={this.state.editMode} cardClicked={this.state.cardClicked} addButtonClicked={this.addButtonClicked} />
        )
    }



}
export default Dashboard