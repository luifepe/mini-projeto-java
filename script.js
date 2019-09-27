

alert ("Seja bem-vindo a sua Calculadora Básica!");
alert ("Este é um site powered by TOTI");
alert ("Made by Luis Pedriquez");
alert ("O uso é simples..");
alert ("Primeiro vou te pedir inserir o numero 1 e o numero 2");
alert ("E indica o tipo de operação a realizar: Soma, Substração, Multiplicação ou  Divisão");
alert ("Depois é só conferir o resultado da operação matemática");

let numero1;    
numero1 = Number(prompt ("Insira o numero 1"));


let operacao;
operacao =  prompt ("Qual é o tipo de operacao?: Soma (+), Substração (-), Multiplicação (*), Divisão (/)");


let numero2;    
numero2 = Number(prompt ("Insira o numero 2"));


function calculadora (){
    if (operacao == "+"){
        numero1 + numero2;
        alert (numero1 + numero2);
    }
    
    

    if (operacao == "-"){
        numero1 - numero2;
        alert (numero1 - numero2);
    }
    

    if (operacao == "*"){
        numero1 * numero2;
        alert (numero1 * numero2);
    }
    

    if (operacao == "/"){
        numero1 / numero2;
        alert (numero1 / numero2);
    }

     
    
}

calculadora ();

alert ("Obrigado por usar meus serviços!");









