var input_a = document.querySelector('.a')
var input_b = document.querySelector('.b')

function AtualizadorDeValor() {
    var input_a = document.querySelector('.a')
    var input_b = document.querySelector('.b')
}

addEventListener('input', AtualizadorDeValor)
addEventListener('submit', function(e) {
    console.log('Forumlário enviado!')
    e.preventDefault()
    if (input_b.value > input_a.value) {
        document.querySelector('.success-msg').style.display = 'block'
        document.querySelector('.error-msg').style.display = ''
    } else if (input_a.value == input_b.value) {
        document.querySelector('.error-msg').style.display = 'block'
        document.querySelector('.success-msg').style.display = ''
    } else {
        document.querySelector('.error-msg').style.display = 'block'
        document.querySelector('.success-msg').style.display = ''
    }
})