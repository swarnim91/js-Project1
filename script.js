const btnElement = document.querySelector('button');
const spanElement = document.getElementById
('update')
btnElement.onclick = function(){
const name = prompt("Enter Your Name");
spanElement.textContent = name;
}