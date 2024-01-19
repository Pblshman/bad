function addHead(name, classCont) {
    const head = document.createElement("div")
    head.classList.add("fontSemBold");
    head.textContent = name
    return head;
  }
  
export default addHead