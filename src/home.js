import content from "./content";
import createheader from "./createheader";

function home() {
    const cont = document.getElementById("content");
    cont.style.display = "grid";
    cont.style.width = "100vw";
    cont.style.height = "100vh";
    cont.style.gridTemplateRows = "10vh";
    cont.appendChild(createheader())
    cont.appendChild(content())
    return cont
  }
  
export default home