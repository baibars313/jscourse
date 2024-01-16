let a = 5
let b = 2
function sum() {

    console.log(a + b)
}


console.log(sum())
// console.log(sum)

function CheckButton(btnname,className) {
    let text = document.getElementById("text-name")
    if (btnname=="a") {
        text.setAttribute("class", className)
    } else {
        text.setAttribute("class", className)
    }
    alert(`clicked ${btnname}`)
}