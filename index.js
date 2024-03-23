
let countlabel = document.getElementById("countlabel");
let incresesbtn = document.getElementById("incresesbtn");
let decresesbtn = document.getElementById("decresesbtn");
let resetbtn = document.getElementById("resetbtn");


let count = 0;
incresesbtn.onclick = function () {
    count++;
    countlabel.textContent = count;

}
decresesbtn.onclick = function () {
    count--;
    countlabel.textContent = count;

}
resetbtn.onclick = function () {
    count = 0;
    countlabel.textContent = count;

}