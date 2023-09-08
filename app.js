const colors = ["green", "red", "rgba(133, 127, 200)", "#f15025"];
const btn = documenet.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    // get random number betwen 0 - 3 color[3]
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = color[randomNumber];
    color.textContent = color[randomNumber];
});

function getRandomNumber() {
    return Math.floor Math.random() * colors.length;
}