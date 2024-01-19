import addHead from "./addhead";
import cont1 from "./cont1";

function homeHead() {
    const homeHeed = addHead("HOME")
    let running = 1
    if (running == 1){
      
      document.getElementById("contentText").replaceChild(cont1(), document.getElementById("contentText").firstChild)
      homeHeed.style.pointerEvents = "none"

    }
    homeHeed.onclick = function() {
      
        document.getElementById("contentText").replaceChild(cont1(), document.getElementById("contentText").firstChild)
        homeHeed.style.pointerEvents = "none"
      }
    return homeHeed
  }
  
export default homeHead