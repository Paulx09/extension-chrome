const modal = document.createElement("div")
modal.classList.add("show")
modal.innerHTML = "<h2>Vuelve al trabajo</h2><p>Acabó tu tiempo</p>"

window.setTimeout(() => {
    document.body.appendChild(modal)
    document.body.style.overflow = "hidden"
}, 10000)