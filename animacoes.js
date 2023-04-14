
document.getElementById('a').addEventListener('click', entrou)
document.getElementById('a').addEventListener('blur', saio)
function entrou(){
    document.getElementById('a').style.width="50px"
    document.getElementById('a').style.transition="0.5s"
    document.getElementById('a').value=''
}
function saio(){
    document.getElementById('a').style.width="20px"
    document.getElementById('a').style.transition="0.5s"
}
document.getElementById('c').addEventListener('click', centrou)
document.getElementById('c').addEventListener('blur', csaio)
function centrou(){
    document.getElementById('c').style.width="50px"
    document.getElementById('c').style.transition="0.5s"
    document.getElementById('c').value=''
}
function csaio(){
    document.getElementById('c').style.width="20px"
    document.getElementById('c').style.transition="0.5s"
}
document.getElementById('b').addEventListener('click', bentrou)
document.getElementById('b').addEventListener('blur', bsaio)
function bentrou(){
    document.getElementById('b').style.width="50px"
    document.getElementById('b').style.transition="0.5s"
    document.getElementById('b').value=''
}
function bsaio(){
    document.getElementById('b').style.width="20px"
    document.getElementById('b').style.transition="0.5s"
}