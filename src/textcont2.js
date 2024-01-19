import addtitle from "./addtittle";
import addpara from "./addpara";
import addsubtit from "./addsubtit";

function textCont2() {
    const textCont = document.createElement("div")
    textCont.style.display = "flex"
    textCont.style.flexDirection = "column";
    textCont.style.gap = "10px"
    textCont.style.paddingTop = "5vh"
    textCont.style.paddingLeft = "10vw"
    textCont.style.paddingRight = "10vw"
    textCont.appendChild(addtitle("OUR PRODUCTS"))
    textCont.appendChild(addsubtit("DOG MEAT"))
    textCont.appendChild(addpara("Indulge in a culinary masterpiece at Mr. Sandman Restaurant with our signature dish, Prime Cuts Symphony. This exquisite creation showcases the richness and succulence of premium beef, carefully selected and expertly prepared to perfection."))
    textCont.appendChild(addpara("Savor the melt-in-your-mouth tenderness of each meticulously chosen cut, grilled to your desired perfection. The dish is a harmonious blend of flavors, where the natural richness of the beef is enhanced by our special seasoning, creating a symphony for your taste buds."))
    textCont.appendChild(addpara("See you soon."))
  
    return textCont;
  }
  
export default textCont2