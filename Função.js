

const form = document.getElementById('Enviar');
const ValorA = document.getElementById('ValorA');
const ValorB = document.getElementById('ValorB');

function validaNumeroMaiorQueB(A, B){
    return B > A ;
}

form.addEventListener('submit', function(e){
    e.preventDefault(); //previne carregamento da página após "submit"
    let A = parseFloat(document.getElementById('ValorA').value);
    let B = parseFloat(document.getElementById('ValorB').value);


    const mensagemPositiva = `O Valor <B>${ValorB.value}</B> e maior que o valor <B>${ValorA.value}</B> `;
    const mensagemNEGATIVA = ` ERRADO, O Valor <B>${ValorB.value}</B> e menor que o valor <B>${ValorA.value}</B> `;

    forEValido = validaNumeroMaiorQueB(A, B)
    if  (forEValido){
        ConteinerSucesso = document.querySelector('.CertoMesage');
        ConteinerSucesso.innerHTML = mensagemPositiva;
        ConteinerSucesso.style.display = 'block';
       

        ValorA.value = ('');
        ValorB.value = ('');

    } else{
        ConteinerNegativo = document.querySelector('.ErroMensage');
        ValorA.style.border = '1px solid red'
        ConteinerNegativo.innerHTML = mensagemNEGATIVA;
        ConteinerNegativo.style.display = 'block';
    }

    })
