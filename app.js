FAQ1 = document.getElementById("FAQ-Q1")
FAQ2 = document.getElementById("FAQ-Q2")
FAQ3 = document.getElementById("FAQ-Q3")
FAQ4 = document.getElementById("FAQ-Q4")
FAQ5 = document.getElementById("FAQ-Q5")
FAQ6 = document.getElementById("FAQ-Q6")

FAQ1.addEventListener("click", function (){
    document.getElementById("q1-card").classList.toggle("show")
})

FAQ2.addEventListener("click", function() {
    document.getElementById("q2-card").classList.toggle("show")
})

FAQ3.addEventListener("click", function() {
    document.getElementById("q3-card").classList.toggle("show")
})

FAQ4.addEventListener("click", function() {
    document.getElementById("q4-card").classList.toggle("show")
})

FAQ5.addEventListener("click", function() {
    document.getElementById("q5-card").classList.toggle("show")
})

FAQ6.addEventListener("click", function() {
    document.getElementById("q6-card").classList.toggle("show")
}) 