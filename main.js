var input_a = parseFloat(document.querySelector('.a'))
var input_b = parseFloat(document.querySelector('.b'))

function maior() {
    parseFloat(document.querySelector('.a'))
    parseFloat(document.querySelector('.b'))
    if (document.querySelector('.b').value > document.querySelector('.a').value) {
        console.log('B maior que A!')
    } else if (document.querySelector('.b').value == document.querySelector('.a').value) {
        console.log('B é igual á A!')
    } else {
        console.log('B é menor que A!')
    }
    console.log(`input_a valor = ${document.querySelector('.a').value}`)
    console.log(`input_b valor = ${document.querySelector('.b').value}`)
}

addEventListener('input', maior)
addEventListener('submit', function(e) {
    console.log('Forumlário enviado!')
    e.preventDefault()
    if (document.querySelector('.b').value > document.querySelector('.a').value) {
        document.querySelector('.success-msg').style.display = 'block'
        document.querySelector('.error-msg').style.display = ''
    } else if (document.querySelector('.b').value == document.querySelector('.a').value) {
        document.querySelector('.error-msg').style.display = 'block'
        document.querySelector('.success-msg').style.display = ''
    } else {
        document.querySelector('.error-msg').style.display = 'block'
        document.querySelector('.success-msg').style.display = ''
    }
})