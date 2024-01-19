import textCont1 from "./textCont1"

function cont1() {
    const conte = document.createElement("div")
    conte.appendChild(textCont1())
    conte.id = "cont1"
    return conte;
  }
  
export default cont1