import addtitle from "./addtittle";
import addpara from "./addpara";

function textCont1() {
    const textCont = document.createElement("div")
    textCont.style.display = "flex"
    textCont.style.flexDirection = "column";
    textCont.style.gap = "10px"
    textCont.style.backgroundColor = "#faf9f6"
    textCont.style.paddingTop = "5vh"
    textCont.style.paddingLeft = "10vw"
    textCont.style.paddingRight = "10vw"
    textCont.appendChild(addtitle("MR SANDMAN RESTAURANT"))
    textCont.appendChild(addpara("Welcome to Mr. Sandman Restaurant, an oasis of culinary delight in the heart of the city. Step into a world where flavors dance on your palate, and every dish is a masterpiece crafted with passion and precision."))
    textCont.appendChild(addpara("At Mr. Sandman, we take pride in offering a menu that reflects the essence of both tradition and innovation. From the warm embrace of our hospitality to the carefully curated selection of dishes, each element is designed to transport you to a realm of exquisite dining.    "))
    textCont.appendChild(addpara("Our culinary artisans blend the finest ingredients to create a symphony of tastes, where every bite tells a story of dedication and artistry. Whether you're savoring our sumptuous appetizers, indulging in mouthwatering main courses, or delighting in our decadent desserts, each dish is a celebration of culinary excellence."))
    textCont.appendChild(addpara("Immerse yourself in the inviting ambiance of Mr. Sandman, where every detail is designed to enhance your dining experience. Whether it's a casual meal with friends, a romantic dinner, or a special celebration, Mr. Sandman Restaurant is your destination for memorable moments and unparalleled gastronomic adventure. Join us and let the magic of flavors unfold at Mr. Sandman Restaurant.    "))
    textCont.appendChild(addpara("See you soon."))
  
    return textCont;
  }
  
export default textCont1