$(document).ready(function() {
    $(document).submit(function(e) {
        e.preventDefault()
        var tarefa = $('.input').val()
        if (tarefa != '') {
            $('.lista ul').append(`<button onclick="this.style = 'text-decoration: line-through'"><li>${tarefa}</li></button>`)
        } else {}
        $('.input').val('')
    })
    $('.abrir').click(function() {
        $('.lista').slideDown(500)
    })
    $('.fechar').click(function() {
        $('.lista').slideUp(500)
    })
    $('.limpar').click(function() {
        if (confirm('Tem certeza que deseja limpar a lista?')) {
            $('.lista ul button').remove()
        }
    })
})