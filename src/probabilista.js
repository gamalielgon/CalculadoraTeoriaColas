let calcBtn = document.getElementById('calcBtn');
let resetBtn = document.getElementById('resetBtn');
let valueLq = document.getElementById('valueLq');
let valueWq = document.getElementById('valueWq');
let valueLs = document.getElementById('valueLs');
let valueWs = document.getElementById('valueWs');
let valueU = document.getElementById('valueU');
let valuePn = document.getElementById('valuePn');

let inputA = document.getElementById('inputA');
let inputS = document.getElementById('inputS');
let inputN = document.getElementById('inputN');

function getLq(a, s){
    return (a*2)/((s)*(s-a));
}
function getWq(a, s){
    return a/((s)*(s-a));
}
function getLs(a, s){
    return a/(s-a);
}
function getWs(a, s){
    return 1/(s-a);
}
function getU(a, s){
    return a/s;
}
function getPn(a, s, n){
    let p = getU(a,s);
    return (Math.pow(p, (n+1)))*100; 
}

calcBtn.addEventListener('click', function () {

    let a = +document.getElementById('inputA').value;
    let s = +document.getElementById('inputS').value;
    let n = +document.getElementById('inputN').value;

    if (a, s, n) {
        let valueLqRes = getLq(a, s).toFixed(4);
        let valueWqRes = getWq(a, s).toFixed(4);
        let valueLsRes = getLs(a, s).toFixed(4);
        let valueWsRes = getWs(a, s).toFixed(4);
        let valueURes = getU(a, s).toFixed(4);
        let valuePnRes= getPn(a, s, n).toFixed(2);

        valueLq.innerHTML = `${valueLqRes}`;
        valueWq.innerHTML = `${valueWqRes}`;
        valueLs.innerHTML = `${valueLsRes}`;
        valueWs.innerHTML = `${valueWsRes}`;
        valueU.innerHTML = `${valueURes}`;
        valuePn.innerHTML = `${valuePnRes}%`;
    } else {
        valueLq.innerHTML = ``;
        valueWq.innerHTML = ``;
        valueLs.innerHTML = ``;
        valueWs.innerHTML = ``;
        valueU.innerHTML = ``;
        valuePn.innerHTML = ``;
        Swal.fire({
            icon: 'error',
            title: 'Algo salió mal',
            text: 'Por favor rellena todos los campos',
        })
    }
});

resetBtn.addEventListener('click', function () {
    inputA.value = '';
    inputS.value = '';
    valueLq.innerHTML = '';
    valueWq.innerHTML = '';
    valueLs.innerHTML = '';
    valueWs.innerHTML = '';
    valueU.innerHTML = '';
    valuePn.innerHTML = '';
})