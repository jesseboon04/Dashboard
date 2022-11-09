import { render } from "@testing-library/react";
import "./LeftPane.css"


const LeftPane = ({ navigationListItems, buttonText }) => {

let toBeRenderdNavigationListItems = navigationListItems.map(object =>{

    let message = null
    if(object.message > 0){
        message = <div className="dashboard__message">{object.message}</div>
    }
    return(
    <li key={object.name} className="dashboard__li">
        <a href="" className="dashbaord__link">{object.name}</a>
        {message}
    </li>);
 } );

    
             

    return (
        <>
            <section className="dashboard__Wrapper">
                <nav className="dashboard__nav">
                    <ul className="dashboard__ul">
                        {toBeRenderdNavigationListItems}



                    </ul>
                </nav>
                <button className="dasboard__button">{buttonText}</button>
            </section>
        </>

    );

    }; 

export default LeftPane;