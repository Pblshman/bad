import cont1 from "./cont1";

function content(name) {
    const cont = document.createElement("div")
    cont.id = "contentText";
    cont.style.display = "flex"
    cont.style.justifyContent = "center"
    cont.style.gridRow = "2 / 3"
    cont.style.backgroundColor = "#faf9f6"
    
    cont.appendChild(cont1())

    return cont;
  }
  
export default content