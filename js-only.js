const button = document.querySelector("button")
const input1 = document.getElementById("num1")
const input2 = document.getElementById("num2")

function add(num1, num2) {
    return num1 + num2
}

// logical error in the application - VALUE of an input element is always a string!
// output: 105 istead of 15 (add) 
button.addEventListener("click", function() {
    console.log(add(input1.value, input2.value))
})



