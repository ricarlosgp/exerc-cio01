/*
alert("Insira dois números para efetuarmos a ADIÇÃO.");
    let n1 = prompt("Digite o primeiro número: ");
    let n2 = prompt("Digite o segundo número: ");
    let resultado = Number(n1) + Number(n2)
    alert("A ADIÇÃO do número " + +n1 + " mais o número " +n2 + " resultou em " + resultado +".");

alert("Insira dois números para efetuarmos a SUBTRAÇÃO.");
    let n1 = prompt("Digite o primeiro número: ");
    let n2 = prompt("Digite o segundo número: ");
    let resultado = Number(n1) - Number(n2)
    alert("A SUBTRAÇÃO do número " + +n1 + " menos o número " +n2 + " resultou em " + resultado +".");

alert("Insira dois números para efetuarmos a MULTIPLICAÇÃO.");
    let n1 = prompt("Digite o primeiro número: ");
    let n2 = prompt("Digite o segundo número: ");
    let resultado = Number(n1) * Number(n2)
    alert("O PRODUTO do número " + +n1 + " por " +n2 + " resultou em " + resultado +".");

alert("Insira dois números para efetuarmos a DIVISÃO.");
    let n1 = prompt("Digite o primeiro número: ");
    let n2 = prompt("Digite o segundo número: ");
    let resultado = Number(n1) / Number(n2)
    alert("A DIVISÃO do número " + +n1 + " por " +n2 + " resultou em " + resultado +".");

alert("Insira dois números para efetuarmos o RESTO DA DIVISÃO.");
    let n1 = prompt("Digite o primeiro número: ");
    let n2 = prompt("Digite o segundo número: ");
    let resultado = Number(n1) % Number(n2)
    alert("O RESTO DA DIVISÃO do número " + +n1 + " por " +n2 + " resultou em " + resultado +".");



alert("Insira dois números para efetuarmos a ADIÇÃO. Verifique se o resultado dessa adição é PAR ou ÍMPAR.");
    let n1 = prompt("Digite o primeiro número: ");
    let n2 = prompt("Digite o segundo número: ");
    let addition = Number(n1) + Number(n2);   
    

    if (addition % 2 === 0) {
        alert("A ADIÇÃO do número " + +n1 + " mais o número " +n2 + " resultou em " +addition +". " + " Esse resultado é par.");
    } else {

        alert("A ADIÇÃO do número " + +n1 + " mais o número " +n2 + " resultou em " + addition+"." + " Esse resultado é ímpar.");        
    }

*/

alert("Insira dois números para efetuar a ADIÇÃO. Verifique se o resultado dessa adição é PAR ou ÍMPAR e se os números informados são IGUAIS ou DIFERENTES.");
    let n1 = prompt("Digite o primeiro número: ");
    let n2 = prompt("Digite o segundo número: ");
    let addition = Number(n1) + Number(n2);   
    let comparation = n1==n2;

    
    if (addition % 2 === 0 && comparation==true) {  
     
        alert("A ADIÇÃO do número " + n1 + " mais o número " + n2 + " resultou em " + addition + ". " + " Esse resultado é par e os números informados são iguais. " ); 
    }

    if (addition % 2 === 0 && comparation==false) {  
     
        alert("A ADIÇÃO do número " + n1 + " mais o número " + n2 + " resultou em " + addition + ". " + " Esse resultado é par e os números informados são diferentes. " ); 
    }
    
    if (addition % 2 !== 0 && comparation==true) {  
     
        alert("A ADIÇÃO do número " + n1 + " mais o número " + n2 + " resultou em " + addition + ". " + " Esse resultado é um número ímpar e os números informados são iguais. " ); 
    }

    if (addition % 2 !== 0 && comparation==false) {  
     
        alert("A ADIÇÃO do número " + n1 + " mais o número " + n2 + " resultou em " + addition + ". " + " Esse resultado é um número ímpar e os números informados são diferentes. " ); 
    }

        
    
    

   
    
    

