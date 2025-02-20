function hideElement(event) {
    const element = event.target

    element.style.display = "none"

    document.body.style.overflow = "auto"
    document.removeEventListener("click", hideElement)
    document.removeEventListener("mouseover", addBorder)
    document.removeEventListener("mouseout", removeBorder)
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