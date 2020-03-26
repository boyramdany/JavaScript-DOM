const btnSatu = document.getElementById('warna1');

// Add Event Listener
btnSatu.addEventListener('click', function () {
    // document.body.style.backgroundColor = 'green'
    document.body.classList.toggle('biru-tua');
});

// BUTTON DUA
const btnDua = document.createElement('button');
const textbtnDua = document.createTextNode('Acak Warna');
btnDua.appendChild(textbtnDua);
btnDua.setAttribute('type', 'button');
btnSatu.after(btnDua);

btnDua.addEventListener('click', function () {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
});

// const sMerah = document.querySelector('input[name=sMerah]')
const sMerah = document.getElementById('sMerah');
const sHijau = document.getElementById('sHijau');
const sBiru = document.getElementById('sBiru');

sMerah.addEventListener('input', function () {
    //ambil value apapun element input 
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';

});

sHijau.addEventListener('input', function () {
    //ambil value apapun element input 
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});

sBiru.addEventListener('input', function () {
    //ambil value apapun element input 
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});

//Ketika mouse bergerak di dalam body jalankan function berikut
document.body.addEventListener('mousemove', function (e) {
    // posisi mouse
    // console.log(e.clientY);
    // ukuran browser
    // console.log(window.innerWidth);

    const xPos = Math.round((e.clientX / window.innerWidth) * 255);
    const yPos = Math.round((e.clientY / window.innerHeight) * 255);
    document.body.style.backgroundColor =
        'rgb(' + xPos + ',' + yPos + ',100)';
});