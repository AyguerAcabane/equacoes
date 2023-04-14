function calcular(){
    let c = Number(document.getElementById('c').value)
    let a = Number(document.getElementById('a').value)
    let b = Number(document.getElementById('b').value)
    let calculos = document.getElementById('calculos')
    let resultado = document.getElementById('resultado')
    resultado.style.display="block"
    calculos.innerHTML=""
    resultado.innerHTML=""
    
    if ( c == 0 & b!= 0 & a!=0 ){
        calculos.innerHTML=`<br>c<sup>2</sup> = ${a}<sup>2</sup> + ${b}<sup>2</sup>`
         let calculando = b*2+a*2
         let cfinal = Math.sqrt(calculando)
      
        resultado.innerHTML+=`c= ${cfinal.toFixed(2)}`
        
    }else if( c == 0 & b== 0 & a==0 ){
        resultado.style.display="none"
        alert("Preencha bem os quadros de acordo com a imagem")
    }else if( c != 0 & b!= 0 & a==0 ){
        calculos.innerHTML=`<br>-a<sup>2</sup> = (-${c}<sup>2</sup>) + ${b}<sup>2</sup>`
        let calculandoa = -a*2+b*2
        let afinal = Math.sqrt(calculandoa)
        afinal = -afinal
        resultado.innerHTML+=`a= ${afinal.toFixed(2)}`
        
    }else if( c != 0 & b== 0 & a!=0 ){
        calculos.innerHTML=`<br>-b<sup>2</sup> = ${a}<sup>2</sup> - (${c}<sup>2</sup>)`
        let calculandob= a*2 -c*2
        let bfinal= Math.sqrt(calculandob)
        bfinal= -bfinal
        resultado.innerHTML+=`b= ${bfinal.toFixed(2)}`
    }
}
