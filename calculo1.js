
function calcular(){
    
let ax= document.getElementById('a')
let bx= document.getElementById('b') 
let cx= document.getElementById('c')
let cdel = document.getElementById('del')
let res= document.getElementById('res')
cdel.style.display='block'
res.style.display='block'


if(ax.value.length == 0 ){// se o programa nao tiver x2 entao
window.alert('Por favor preencha os quadrados')
cdel.style.display='none'
res.style.display='none'
}else if(cx.value.length == 0){
    let a = Number(ax.value)
    let b = Number(bx.value) 
    let c = Number(cx.value)
    cdel.innerHTML=''
    res.innerHTML=''
   
    
    resultado = b/a
    cdel.innerHTML=`Como nao tem o ultimo valor entao:  <br> (${a}) x2 + (${b})x =0 <br> x((${a}) + ${b}) =0  <br> x= 0 V x= (${a})x + ${b} =0 <br><br> <p id = resultado> x= 0 V x =  ${-resultado.toFixed(3)}<br>Nesse caso o valor de x esta entre { ${-resultado.toFixed(3)}, 0} </p>   `

}else if ( bx.value.length == 0){ //se o x for 0
    let a = Number(ax.value)
    let b = Number(bx.value) 
    let c = Number(cx.value)
    cdel.innerHTML=''
    res.innerHTML=''
    cdel.innerHTML=` Como nao tem valor de x entao : <br> (${a})x2 + (${c}) =0 <br> x2= (${-c})/(${a}) <br> x = raiz(${((-c)/a).toFixed(3)})<br><br> `
    resultado = (-c)/a
    if (resultado<0){
        cdel.innerHTML='esta equaçao nao esta exata'
    }else{
        raiz= Math.sqrt(resultado)
    cdel.innerHTML+= `<p id = resultado> x= ${raiz.toFixed(3)}<br> O resultado pode ser negativo e positivo nesse caso x = {-${raiz.toFixed(3)},${raiz.toFixed(3)}}</p>`

    }
    

}else if (ax.value.length != 0 & bx.value.length != 0 & cx.value.length != 0 ){//leitura dos valores  e calculo do delta e esuqçao segundo grau completa
let a = Number(ax.value)
let b = Number(bx.value) 
let c = Number(cx.value)
cdel.innerHTML=''
cdel.innerHTML= `<p>Para este tipo de equaçao (${a})x2+(${b})x+(${c}) primeiro calculamos o delta</p>`
cdel.innerHTML+= `Delta = b.b-4.a.c<br>Delta = (${b}).(${b})-4. (${a}). (${c})<br>Delta= ${b*b}-${4*a*c} <br><br><p id = resultado> Delta = ${b*b-4*a*c}</p>`
let delt = b*b-4*a*c
// criador Renato
let raizdelt = Math.sqrt(delt)
if (delt<0) {// euaçao do segundo grau se o delta for menor que zero
    res.innerHTML=''
    res.innerHTML='Esta équaçao nao esta exata pk o delta é menor que zero, verifique os seus dados'
} else if(delt==0){// eauaçao do segundo grau se o delta for = 0
    res.innerHTML=''
    res.innerHTML='Como delta é =0 entao calculamos apenas um x: <br>'
    res.innerHTML+=`x = -b/2.a <br> x = - (${b}) / 2.(${a}) <br> x= ${-b/2*a}`
    
} else  {// equaçao do segundo grau completa
   res.innerHTML=''
   let ad=2*a
   let xu= (-b + raizdelt)/ad 
   let xd = (-b - raizdelt)/ad
   res.innerHTML='Como o delta é maior que 0 entao calculamos dois valores que nesse caso vai ser x1 x2:<br>'
   res.innerHTML+='x1 =-B+ raiz(delta)/(2.a) <br> '
   res.innerHTML+=`x1 =-(${b}) + raiz(${delt}) / (2.${a}) <br>`
   res.innerHTML+=`x2 =-B- raiz(delta)/(2.a)<br> x2=-(${b}) - raiz(${delt}) / (2.${a}) `
   res.innerHTML+=`<p>x1=((${-b}) + ${raizdelt.toFixed(3)})/ (${2*a}) <br> x2=((${-b}) - ${raizdelt.toFixed(3)})/ (${2*a})  </p><br>`
   res.innerHTML+=`<p id = "resultado" style = " width: 190px;" >x1 =${xu.toFixed(3)}<br>x2=${xd.toFixed(3)}</p>`  
}
}



}

