/*fetch('http://127.0.0.1:5500/index.html', { mode: 'no-cors' })
  .then(response => {
    // Você só pode acessar os cabeçalhos e o status da resposta
    console.log(response.headers);
    console.log(response.status);
  });*/

/*    function interacao() {
    document.querySelector('.conteudo__final').style.backgroundColor = '#48556A';
    document.querySelector('.conteudo__final').style.color = '#9DAEC2';
    document.querySelector('.conteudo__final').style.borderRadius = '0 0 .625rem .625rem';
    document.querySelector('.conteudo__final').innerHTML = 'S H A R E &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<a href="https://www.facebook.com/?locale=pt_BR"><img src="/img/facebook.png"></a>&nbsp&nbsp&nbsp&nbsp&nbsp<a href="https://x.com/?lang=pt"><img src="/img/x.png"></a>&nbsp&nbsp&nbsp&nbsp&nbsp<a href="https://br.pinterest.com/"><img src="/img/pinterest.png"></a>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button id="share"><img id="share__icone" src="/img/iconeShareActive.png" alt="Ícone do Share"></button>';
    document.getElementById('share__icone').src = "/img/iconeShareActive.png";
    document.getElementById('share').style.backgroundColor = "#6E8098";
}*/

/*// Example of image error handling
const img = document.querySelector('img');
img.onerror = function() {
  img.src = 'path/to/fallback-image.png';
}; */

let formN = document.querySelector('.conteudo__final');
let formA = document.querySelector('.conteudo__finalA');

function btnN() {
    formN.style.display = 'none';
    formA.style.display = 'block';
}

function btnA() {
    formN.style.display = 'block';
    formA.style.display = 'none';
}