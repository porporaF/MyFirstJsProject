let FirstBill;
let SecondBill;
let ThirdBill;

function TotalBill() {
    FirstBill = parseFloat(document.getElementById('FirstBill').value);
    SecondBill = parseFloat(document.getElementById('SecondBill').value);
ThirdBill = parseFloat(document.getElementById('ThirdBill').value);
let Total=FirstBill+SecondBill+ThirdBill;
document.getElementById('result').innerText='Total bill is:'${Total};
}

