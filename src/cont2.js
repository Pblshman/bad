import textCont2 from "./textcont2";

function cont2() {
    const conte = document.createElement("div")
    conte.appendChild(textCont2())
    conte.id = "cont2"
    return conte;
  }
  
export default cont2