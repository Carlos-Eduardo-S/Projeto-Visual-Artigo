let formN = document.querySelector('.conteudo__final');
let formA = document.querySelector('.conteudo__finalA');

function btnN() {
    formA.style.display = 'block';
    formA.style.display = 'flex';
}

function btnA() {
    formN.style.display = 'block';
    formN.style.display = 'flex';
    formA.style.display = 'none';
}