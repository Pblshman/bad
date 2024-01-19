import addHead from "./addhead";
import cont2 from "./cont2";

function product() {
    const homeProdct = addHead("PRODUCT")
    homeProdct.onclick = function() {
      
        document.getElementById("contentText").replaceChild(cont2(), document.getElementById("contentText").firstChild)
  
      }
    return homeProdct
  }
  
export default product