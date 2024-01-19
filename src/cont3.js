import textCont3 from "./textcont3";

function cont3() {
    const conte = document.createElement("div")
    conte.appendChild(textCont3())
    conte.id = "cont3"
    return conte;
  }
  
export default cont3