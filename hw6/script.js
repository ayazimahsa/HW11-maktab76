
function getAdd() {
    let oneVal = document.getElementById("val1").value;
    let twoVal = document.getElementById("val2").value;
    let sumVal = Number(oneVal) + Number(twoVal);
    document.getElementById("result").innerHTML = sumVal;
    if (sumVal % 2 === 0)
        document.getElementById("result").style.color = 'blue';
    else
        document.getElementById("result").style.color = 'red';
}