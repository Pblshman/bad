import homeHead from "./homehead";
import product from "./product";
import contact from "./contact";

function createheader() {
    const head = document.createElement("div")
    head.style.display = "flex";
    head.style.gridRow = "1 / 2";
    head.style.backgroundColor = "#e8f9fd";
    head.style.justifyContent = "center"
    head.style.gap = "5vw"
    head.style.paddingTop = "5vh"
    head.appendChild(homeHead())
    head.appendChild(product())
    head.appendChild(contact())

    
    return head;
  }
  
export default createheader