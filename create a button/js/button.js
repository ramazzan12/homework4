const button = document.getElementById("btn");
let count = 0;
button.addEventListener('click', event => {
    count += 1;
    document.getElementById("btn").innerHTML = count;
});