function addtitle(tName) {
    const title = document.createElement("h1")
    title.classList.add("fontSemBold");
    title.textContent = tName
    title.style.textAlign = "center"
    return title
  }
  
export default addtitle