$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')

    function Timer(tempo) {
        setTimeout(() => {
            $('#mensagem').text('Registro').fadeIn(500)
            $('#mensagem').css({backgroundColor: '#ffa500', borderColor: '#ffa600e3', color: '#000'})
        }, tempo);
    }

    $('.enviar').click(function() {
        if ($('#nome').val().length < 2 || $('#email').val() == '' || $('#telefone').val().length < 13 || $('#cpf').val().length < 14  || $('#endereco').val().length < 1 || $('#cep').val().length < 9) {
            alert('Os campos estão incompletos!')
        } else {
            $('#mensagem').text('Registro enviado')
            $('#mensagem').css({backgroundColor: '#008000', borderColor: 'rgba(0, 128, 0, 0.801)', color: '#fff'})
            Timer(1500)
        }
    })

    $('.resetar').click(function() {
        let p = confirm('Tem certeza que deseja reiniciar o registro?')
        if (p == true) {
            $('#mensagem').text('Registro reiniciado')
            $('#mensagem').css({backgroundColor: '#0000ff', borderColor: 'rgba(0, 0, 255, 0.759)', color: '#fff'})
            $('form input').val('')
        Timer(1500)
        }
    })
})