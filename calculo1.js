function toque1(){
    let ax= document.getElementById('a')
    ax.value= ""
}
function toque2(){
    let bx= document.getElementById('b')
    bx.value= ""
}
function toque3(){
    let cx= document.getElementById('c')
    cx.value= ""
}
function calcular(){
    
let ax= document.getElementById('a')
let bx= document.getElementById('b') 
let cx= document.getElementById('c')
let a = Number(ax.value)
let b = Number(bx.value)
let c = Number(cx.value)
let at = a
let bt = b
let ct = c
console.log(`${a}${b}${c}`)

let cdel = document.getElementById('del')
let res= document.getElementById('res')
cdel.style.display='block'
res.style.display='block'


if( at== 'NaN'  ){// se o programa nao tiver x2 entao
window.alert('Por favor preencha os quadrados')
cdel.style.display='none'
res.style.display='none'
}else if(ct== NaN){
    
    cdel.innerHTML=''
    res.innerHTML=''
   
    
    resultado = b/a
    cdel.innerHTML=`Como nao tem o ultimo valor entao:  <br> (${a}) x2 + (${b})x =0 <br> x((${a}) + ${b}) =0  <br> x= 0 V x= (${a})x + ${b} =0 <br><br> <p id = resultado> x= 0 V x =  ${-resultado.toFixed(3)}<br>Nesse caso o valor de x esta entre { ${-resultado.toFixed(3)}, 0} </p>   `

}else if ( bt==NaN){ //se o x for 0
   
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
    

}else if (at != NaN & bt != NaN & ct!= NaN ){//leitura dos valores  e calculo do delta e esuqçao segundo grau completa

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
   res.innerHTML+='x =-B &#177 &#8730(delta) &frasl; (2.a) <br> '
   res.innerHTML+=`x =-(${b}) &#177 &#8730(${delt}) &frasl; (2.${a}) <br>`
   
   res.innerHTML+=`<p>x<sub>1</sub>=((${-b}) + ${raizdelt.toFixed(3)}) &frasl; (${2*a}) <br> x<sub>2</sub>=((${-b}) - ${raizdelt.toFixed(3)}) &frasl; (${2*a})  </p><br>`
   res.innerHTML+=`<p id = "resultado" style = " width: 190px;" >x<sub>1</sub> =${xu.toFixed(3)}<br>x<sub>2</sub>=${xd.toFixed(3)}</p>`  
}
}



}

