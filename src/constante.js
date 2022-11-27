let calcBtn = document.getElementById('calcBtn');
let resetBtn = document.getElementById('resetBtn');
let valueLq = document.getElementById('valueLq');
let valueWq = document.getElementById('valueWq');
let valueLs = document.getElementById('valueLs');
let valueWs = document.getElementById('valueWs');
let valueU = document.getElementById('valueU');

let inputA = document.getElementById('inputA');
let inputS = document.getElementById('inputS');

function getLq(a, s){
    return (a*2)/((s*2)*(s-a));
}
function getWq(a, s){
    return a / ((s*2)*(s-a));
}
function getLs(a, s){
    return ((a)*(2*s-a))/((s*2)*(s-a));
}
function getWs(a, s){
    return ((s*2)-a)/((2*s)*(s-a));
}
function getU(a, s){
    return a/s;
}

calcBtn.addEventListener('click', function () {

    let a = +document.getElementById('inputA').value;
    let s = +document.getElementById('inputS').value;

    if (a, s) {
        let valueLqRes = getLq(a, s).toFixed(4);
        let valueWqRes = getWq(a, s).toFixed(4);
        let valueLsRes = getLs(a, s).toFixed(4);
        let valueWsRes = getWs(a, s).toFixed(4);
        let valueURes = getU(a, s).toFixed(4);

        valueLq.innerHTML = `${valueLqRes}`;
        valueWq.innerHTML = `${valueWqRes}`;
        valueLs.innerHTML = `${valueLsRes}`;
        valueWs.innerHTML = `${valueWsRes}`;
        valueU.innerHTML = `${valueURes}`;
    } else {
        valueLq.innerHTML = ``;
        valueWq.innerHTML = ``;
        valueLs.innerHTML = ``;
        valueWs.innerHTML = ``;
        valueU.innerHTML = ``;
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
})