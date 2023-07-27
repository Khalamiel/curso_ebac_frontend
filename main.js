const numeroA = document.getElementById('numeroA');
const numeroB = document.getElementById('numeroB');
const form = document.getElementById('form');


form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (numeroA.value > numeroB.value){
        numeroA.style.border = '1px solid red'
        document.querySelector('.error-message').style.display = 'block';

        numeroA.value = '';
        numeroB.value = '';

    } else {
        document.querySelector('.error-message').style.display = 'none';

        const mensagemSucesso = `Os valores de <b>${numeroA.value}</b> e <b>${numeroB.value}</b> foram computados`

        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        numeroA.value = '';
        numeroB.value = '';
    }
})