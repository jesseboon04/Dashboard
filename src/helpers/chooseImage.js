import treeImage from "../img/tree.jpeg";
import suitcaseImage from "../img/suitcase.webp";
import grassImage from "../img/grass.jpeg"
import colaImage from "../img/cola.webp"
import eagleImage from "../img/eagle.webp"


function chooseImage(inputfromPopup){
    let toBeAddedImage;
    switch (inputfromPopup) {
        case ("Cola"):
            toBeAddedImage = colaImage;
            break;
        case ("Tree"):
            toBeAddedImage = treeImage;
            break;
        case("Suitcase"):
            toBeAddedImage = suitcaseImage;
            break;
        default: 
        toBeAddedImage = eagleImage
        break;
    }
    return toBeAddedImage
}
export default chooseImage;