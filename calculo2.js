
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
            let resultado= b/a
           if (resultado<0){
            cdel.innerHTML= 'esta equaçao biquadratica nao tem soluçao'
           }else{
            resultado = b/a
            resultado = Math.sqrt(resultado)
            cdel.innerHTML=`Primeiro vamos calcular como se fosse equaçao do segundo grau <br>Como nao tem o ultimo valor entao:  <br> (${a}) x2 + (${b})x =0 <br> x((${a}) + ${b}) =0  <br> x= 0 V x= (${a})x + ${b} =0 <br><br> <p id = resultado> Aqui temos o resultado da nossa equação <br> x= 0 V x =  ${-resultado.toFixed(3)}<br>Nesse caso o valor de x esta entre { ${-resultado.toFixed(3)}, 0} </p>   `
    
           }
            
           
        }else if ( bx.value.length == 0){ //se o b for 0
            let a = Number(ax.value)
            let b = Number(bx.value) 
            let c = Number(cx.value)
            cdel.innerHTML=''
            res.innerHTML=''
            cdel.innerHTML=` Acho que ja é custume que devemos calcular como se fosse equaçao do segundo grau <br>Como nao tem valor de x entao : <br> (${a})x2 + (${c}) =0 <br> x2= (${-c})/(${a}) <br> x = raiz(${((-c)/a).toFixed(3)})<br><br> `
            resultado = (-c)/a
            if (resultado<0){
                cdel.innerHTML='esta equaçao nao esta exata'
            }else{

                raiz= Math.sqrt(resultado)
                raiz=Math.sqrt(raiz)
                cdel.innerHTML+= `<br><p id = resultado> x= ${raiz.toFixed(3)}<br> O resultado pode ser negativo e positivo nesse caso x = {-${raiz.toFixed(3)},${raiz.toFixed(3)}}</p>`

            }
            

        }else if (ax.value.length != 0 & bx.value.length != 0 & cx.value.length != 0 ){//leitura dos valores  e calculo do delta e esuqçao segundo grau completa
        let a = Number(ax.value)
        let b = Number(bx.value) 
        let c = Number(cx.value)
        cdel.innerHTML=''
        cdel.innerHTML+=`Na equaçao biquadratica nos convertemos o ax4&#177bx&#178&#177c=0 em ax&#178&#177bx&#177c=0`
        cdel.innerHTML+= `<p>Para este tipo de equaçao (${a})x&#178+(${b})x+(${c}) primeiro calculamos o delta</p>`
        cdel.innerHTML+= `Delta = b.b-4.a.c<br>Delta = (${b}).(${b})-4. (${a}). (${c})<br>Delta= ${b*b}-${4*a*c} <br><br><p id = resultado> Delta = ${b*b-4*a*c}</p>`
        let delt = b*b-4*a*c
        // criador Renato
        let raizdelt = Math.sqrt(delt)
        if (delt<0) {// equaçao do segundo grau se o delta for menor que zero
            res.innerHTML=''
            res.innerHTML='Esta équaçao nao esta exata pk o delta é menor que zero, verifique os seus dados'
        } else if(delt==0){// eauaçao do segundo grau se o delta for = 0
            res.innerHTML=''
          
            res.innerHTML='Como delta é =0 entao calculamos apenas um x: <br>'
            res.innerHTML+=`x = -b/2.a <br> x = - (${b}) / 2.(${a}) <br> x= ${-b/2*a}<br>`
            let x = -b/2*a
            let xd =-b/2*a
            if (x<0){
                x=' esse x nao tem valor'
              
                xd=Math.sqrt(-xd)
                xd=xd.toFixed(3)
                
            }else{
                x= Math.sqrt(-x)
                x=x.toFixed(3)
                xd='esse x não tem valor'
            }
            res.innerHTML+= `<br>Ainda nao resolvemos equaçao do bidratica, o nosso x da equaçao biqudrticao vai ser iqual a raiz do x da equaçao do segundo grau <br> <p id=resultado>x1=${x} <br> x2=${xd}</p>`
            
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
           res.innerHTML+=`<p>x1 =${xu.toFixed(3)}<br>x2=${xd.toFixed(3)}</p><br>`
           xu=xu.toFixed(3)
           xd=xd.toFixed(3)
           let xt=xu
           let xq=xd
           if ( xu<0 & xd<0){//x2 e x1 menor que zero equaçao biquadratica nao tem soluçao
            res.innerHTML=""
            res.innerHTML='esta equação biquadratica não tem solução'

           }else if(xu>0 & xd<0){//x1 menor que zero e x2 maior que zero  
            xu=Math.sqrt(xu)  
            xu=xu.toFixed(3)     
           res.innerHTML+= `Ainda nao resolvemos equaçao do biquadratica, o nosso x da equaçao biquadratica vai ser iqual a raiz do x da equaçao do segundo grau <br><br> <p id=resultado>como x2 é negattivo entao calculamos apenas o x1 que tera dois valores o negativo e o positivo<br>x1=${-xu} <br> x2=${xu}</p>`
           }else if(xd>0 & xu<0){//x1 menor que zero e x2 maior que zero  
            xd=Math.sqrt(xd)  
            xd=xd.toFixed(3)     
            res.innerHTML+= `Ainda nao resolvemos equaçao do biquadratica, o nosso x da equaçao biquadratica vai ser iqual a raiz do x da equaçao do segundo grau <br><br> <p id=resultado>como x1 é negattivo entao calculamos apenas o x2 que tera dois valores o negativo e o positivo<br>x1=${-xd} <br> x2=${xd}</p>`
           }else{
            xu=Math.sqrt(xu)
            xd=Math.sqrt(xd)
            xt=Math.sqrt(xt)
            xq=Math.sqrt(xq)
            xu=xu.toFixed(3)
            xd=xd.toFixed(3)
            xt=xt.toFixed(3)
            xq=xq.toFixed(3)
            res.innerHTML+= `Ainda nao resolvemos equaçao do biquadratica, o nosso x da equaçao biquadratica vai ser iqual a raiz do x da equaçao do segundo grau <br><br> <p id=resultado>Como os dois valores sao positivos entao temos um intervalo de quatro numeros<br>x<sub>1</sub>=${xu} <br> x<sub>2</sub>=${xd}<br>x<sub>3</sub>=${-xt}<br>x<sub>4</sub>= ${-xq}</p>`
      
           }
        }
    }
    
    
    
}
        
    