const prev = document.getElementById("prev")
const next = document.getElementById("next")
const progress = document.getElementById("progress")
const circles = document.querySelectorAll(".circle")

let accumulator = 1

next.addEventListener("click", () => {
    accumulator++

    if (accumulator > circles.length) {
        accumulator = circles.length
    }

    update()

})


prev.addEventListener("click", () => {
    accumulator--

    if (accumulator < 1) {
        accumulator = 1
    }
    update()
})


function update() {
    circles.forEach((item, index) => {
        if (accumulator > index) {
            item.classList.add("active")
        } else {
            item.classList.remove("active")
        }
    })

    const actives = document.querySelectorAll(".active")

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + "%"

    if (accumulator === 1) {
        prev.disabled = true
    } else if (circles.length === accumulator) {
        next.disabled = true
    } else {
        next.disabled = false
        prev.disabled = false
    }

}