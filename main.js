var input_a = parseFloat(document.querySelector('.a').value)
var input_b = parseFloat(document.querySelector('.b').value)

function maior() {
    var input_a = parseFloat(document.querySelector('.a').value)
    var input_b = parseFloat(document.querySelector('.b').value)

    if (input_b > input_a) {
        document.querySelector('.submit').style = 'background-color: rgba(0, 128, 0, 0.694);'
        console.log('B maior que A!')
    } else if (input_b == input_a) {
        document.querySelector('.submit').style = 'background-color: rgba(0, 128, 0, 0.557);'
        console.log('B é igual á A!')
    } else {
        document.querySelector('.submit').style = 'background-color: rgba(0, 128, 0, 0.557);'
        console.log('B é menor que A!')
    }
    console.log(`input_a valor = ${input_a}`)
    console.log(`input_b valor = ${input_b}`)
}

addEventListener('input', maior)
addEventListener('submit', function(e) {
    console.log('Forumlário enviado!')
    e.preventDefault()
    var input_a = parseFloat(document.querySelector('.a').value)
    var input_b = parseFloat(document.querySelector('.b').value)

    if ((input_b) > (input_a)) {
        document.querySelector('.success-msg').style.display = 'block'
        document.querySelector('.error-msg').style.display = ''
    } else if (input_b == input_a) {
        document.querySelector('.error-msg').style.display = 'block'
        document.querySelector('.success-msg').style.display = ''
    } else {
        document.querySelector('.error-msg').style.display = 'block'
        document.querySelector('.success-msg').style.display = ''
    }
})