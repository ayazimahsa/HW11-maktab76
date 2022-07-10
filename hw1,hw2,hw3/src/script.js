// HW1
document.getElementsByTagName("tr")[0].style.backgroundColor = "white";
document.getElementsByClassName("line1")[0].style.backgroundColor = "white";
document.getElementsByClassName("line2")[0].style.backgroundColor = "rgb(186 230 253)";
document.getElementsByClassName("line3")[0].style.backgroundColor = "rgb(216 180 254)";
document.getElementsByClassName("line4")[0].style.backgroundColor = "rgb(153 246 228)";
document.getElementsByClassName("line5")[0].style.backgroundColor = "rgb(248 113 113)";
document.getElementsByClassName("line6")[0].style.backgroundColor = "rgb(254 240 138)";
document.getElementsByClassName("line7")[0].style.backgroundColor = "rgb(153 246 228)";
document.getElementsByClassName("line8")[0].style.backgroundColor = "rgb(240 253 250)";
document.getElementsByClassName("line9")[0].style.backgroundColor = "rgb(17 24 39)";


// HW2
function removeLine() {
    let line = document.querySelectorAll("tr");
    for (let i = 1; i <= 5; i++) {
        line[i].parentElement.removeChild(line[i]);
    }
}

// HW3
function CreateLine() {
for (let i = 0; i < 3; i++) {
    document.querySelector("tbody").insertRow().innerHTML =
        "<tr>" +
        "<td>white</td>" +
        "<td>Cell</td>" +
        "<td>Cell</td>" +
        "</tr>" 
}}


