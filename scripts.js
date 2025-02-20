function hideElement(event) {
    const element = event.target

    element.style.display = "none"
}

function addBorder(event) {
    const element = event.target

    element.style.border = "2px solid darkred"
}

function removeBorder(event) {
    const element = event.target

    element.style.border = ""
}

document.body.addEventListener("click", hideElement)
document.body.addEventListener("mouseover", addBorder)
document.body.addEventListener("mouseout", removeBorder)