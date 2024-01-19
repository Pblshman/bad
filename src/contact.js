import addHead from "./addhead";
import cont3 from "./cont3";

function contact() {
    const homeContact = addHead("CONTACT")
    homeContact.onclick = function() {
      
        document.getElementById("contentText").replaceChild(cont3(), document.getElementById("contentText").firstChild)
        homeContact.style.pointerEvents = "none"
        console.log("hey")
      }
    return homeContact
  }
  
export default contact