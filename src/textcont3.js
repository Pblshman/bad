import addpara from "./addpara";

function textCont3(){
    const textCont = document.createElement("div")
    textCont.style.display = "flex"
    textCont.style.flexDirection = "column";
    textCont.style.gap = "10px"
    textCont.style.paddingTop = "5vh"
    textCont.style.paddingLeft = "10vw"
    textCont.style.paddingRight = "10vw"
    textCont.appendChild(addpara("Mr. Sandman Restaurant"))
    textCont.appendChild(addpara("123 Dream Avenue"))
    textCont.appendChild(addpara("Sandman City, NY 10001"))
    textCont.appendChild(addpara("United States"))

    return textCont;
  }
  
export default textCont3