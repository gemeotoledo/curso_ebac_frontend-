const form = document.getElementById('form-deposito');
let formEValido = false;

// Função que valida que o campo B tem que ser maior que o campo A
function validaCampos(campoA, campoB) {
    return campoB > campoA;
  }

// Função que faz dar a mensagem e as cores após apertar o botão
form.addEventListener('submit' , function(e) {
    e.preventDefault();

    const campoA = document.getElementById('numero-a');
    const campoB = document.getElementById('numero-b');
    const mensagemSucesso = `N° Campo A: <b>${campoA.value}</b> é menor que o N° Campo B: <b>${campoB.value}</b>`;
    const mensagemErro = `N° Campo A: <b>${campoA.value}</b> é maior que o N° Campo B: <b>${campoB.value}</b>`;
    
    formEValido = validaCampos(parseFloat(campoA.value), parseFloat(campoB.value));
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        const containerMensagemErro = document.querySelector('.error-message');
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'none';

        campoA.value = '';
        campoB.value = '';
        campoB.style.border = '';
        
    

    } else {
        campoB.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';

        const containerMensagemErro = document.querySelector('.error-message');
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';

        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'none';

        document.querySelector('.error01-message').style.display = 'none'; //a hora que a mensagem final de erro aparecer esse erro01 vermelho some

        campoA.value = '';
        campoB.value = '';
        
    }
})

// Função onde aparece em tempo real abaixo do Campo B uma mensagem de erro dizendo que ele tem que ser maior que o n° do Campo A (quis fazer a mais)
const campoB = document.getElementById('numero-b');
const campoA = document.getElementById('numero-a');
campoB.addEventListener('keyup', function(e) {

    formEValido = validaCampos(parseFloat(campoA.value), parseFloat(e.target.value));
    
    if (!formEValido) {
        campoB.style.border = '1px solid red';
        document.querySelector('.error01-message').style.display = 'block';
    } else {
        campoB.style.border = '';
        document.querySelector('.error01-message').style.display = 'none';
    }
});

// Função que ao escrever no campo A a mensagem de sucesso ou de erro final ira sumir (quis fazer a mais)
campoA.addEventListener('keyup', function(e) {
    const containerMensagemErro = document.querySelector('.error-message');
    containerMensagemErro.style.display = 'none';

    const containerMensagemSucesso = document.querySelector('.success-message');
    containerMensagemSucesso.style.display = 'none';

    campoB.style.border = ''; // Ao escrever no campo A a borda de erro no campo B some
    document.querySelector('.error01-message').style.display = 'none'; // Ao escrever no campo A essa mensagem de error01 some
});

// Função que ao escrever no campo B a mensagem de sucesso ou de erro final ira sumir (quis fazer a mais)
// poderia ter colocado esse do campo B na outra função, porém quis fazer assim para o meu entendimento
campoB.addEventListener('keyup', function(e) {
    const containerMensagemErro = document.querySelector('.error-message');
    containerMensagemErro.style.display = 'none';

    const containerMensagemSucesso = document.querySelector('.success-message');
    containerMensagemSucesso.style.display = 'none';
}); 


