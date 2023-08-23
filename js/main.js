//$('form').on('submit', function(e) {
//    e.preventDefault();
//})

$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    });

    $('#CPF').mask('000.000.000.00', {
        placeholder: '000.000.000.00'
    })

    $('#CEP').mask('00000-000', {
        placeholder: '00000-000'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            telefone: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            CPF: {
                required: true
            },
            endereco: {
                required: true
            },
            CEP: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposincorretos = validador.numberOfInvalids();
            if (camposincorretos) {
                alert(`Existem ${camposincorretos} campos incorretos`)
            }
        }
    })
})
