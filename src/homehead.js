import addHead from "./addhead";
import cont1 from "./cont1";

function homeHead() {
    const homeHeed = addHead("HOME")
  
    homeHeed.onclick = function() {
      
        document.getElementById("contentText").replaceChild(cont1(), document.getElementById("contentText").firstChild)
        homeHeed.style.pointerEvents = "none"
      }
    return homeHeed
  }
  
export default homeHead