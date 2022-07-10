let createTable = document.querySelector(".ageTable");

let arrayName = [
    { name: "James", age: 9, country: "United States" },
    { name: "Rony", age: 31, country: "United Kingdom" },
    { name: "Peter", age: 58, country: "Canada" },
    { name: "Marks", age: 20, country: "Spain" },
];

let heading = ["Name", "Age", "Country"];
let table = document.createElement("table");
let rowHeader = document.createElement("tr");

//1

heading.forEach((i) => {
    let header = document.createElement("th");
    let textNode = document.createTextNode(i);
    header.appendChild(textNode);
    rowHeader.appendChild(header);
});

table.appendChild(rowHeader);

//2

arrayName.forEach((i) => {
    let row = document.createElement("tr");
    let array = Object.values(i);
    if (array[1] < 10) row.style.backgroundColor = "yellow";
    else if (array[1] >= 10 && array[1] < 40) row.style.backgroundColor = "green";
    else if (array[1] >= 40 && array[1] < 80) row.style.backgroundColor = "red";
    else if (array[1] >= 80) row.style.backgroundColor = "blue";

    Object.values(i).forEach((i) => {
        let cell = document.createElement("td");
        let textNode = document.createTextNode(i);
        cell.appendChild(textNode);
        row.appendChild(cell);
    });

    table.appendChild(row);
});

table.style.margin = "3rem auto";
table.setAttribute("border", "2");
createTable.appendChild(table);




