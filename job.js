/*2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE:
Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;*/

//var InformarNumero = prompt("Digite um número: ");
var Fibonacci = [0,1,1,2,3,5,8,13,21,34];
let PenultimoNumero = Fibonacci[Fibonacci.length - 2]
let UltimoNumero = Fibonacci[Fibonacci.length -1];
let SomaUltimo =Number (UltimoNumero) + Number (PenultimoNumero);
console.log(`Esta é a soma dos últimos dois números da sequência de Fibonacci: ${SomaUltimo}`);
var InformarNumero = prompt("Digite um número: ");
const R = Number (InformarNumero) + Number (SomaUltimo);
console.log(`Essa é o valor da soma entre o último número da sequeência de Fibonacci com o valor digitado pelo usuário ${R}`);



/* 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;*/

const faturamento = {
    mes: "Janeiro",
    Dia1: 1212,
    Dia2: 1112,
    Dia3: 1312,
    Dia4: 1412,
    Dia5: 1512,
    Dia6: 1812,
    Dia7: 1612,
    Dia8: 1111,
    Dia9: 1212,
    Dia10: 1333,
    Dia11: 1000,
    Dia12: 1219,
    Dia13: 1218,
    Dia14: 1217,
    Dia15: 1216,
    Dia16: 1215,
    Dia17: 1214,
    Dia18: 1213,
    Dia19: 1212,
    Dia20: 1211,
    Dia21: 1112,
    Dia22: 1232
}

var media = Number ((faturamento.Dia1) + (faturamento.Dia2) + (faturamento.Dia3) + (faturamento.Dia4) + (faturamento.Dia5) + (faturamento.Dia6) + (faturamento.Dia7) + (faturamento.Dia8) + (faturamento.Dia9) + (faturamento.Dia10) + (faturamento.Dia11) + (faturamento.Dia12) + (faturamento.Dia13) + (faturamento.Dia14) + (faturamento.Dia15) + (faturamento.Dia16) + (faturamento.Dia17) + (faturamento.Dia18) + (faturamento.Dia19) + (faturamento.Dia20) + (faturamento.Dia21) + (faturamento.Dia22))/22

console.log(`A média do mês de ${faturamento.mes} é igual a: ${media}`)

if(media > faturamento.Dia1){
    console.log("O faturamento do dia 1 é MENOR que a média")
}
else if (media <= faturamento.Dia1){
    console.log("O faturamento do dia 1 é MAIOR ou IGUAL a média")
}

if(media > faturamento.Dia2){
    console.log("O faturamento do dia2 é MENOR que a média")
}
else if (media <= faturamento.Dia2){
    console.log("O faturamento do dia 2 é MAIOR ou IGUAL a média")
}

if(media > faturamento.Dia3){
    console.log("O faturamento do dia 3 é MENOR que a média")
}
else if (media <= faturamento.Dia3){
    console.log("O faturamento do dia 3 é MAIOR ou IGUAL a média")
}

if(media > faturamento.Dia4){
    console.log("O faturamento do dia 4 é MENOR que a média")
}
else if (media <= faturamento.Dia4){
    console.log("O faturamento do dia 4 é MAIOR ou IGUAL a média")
}

if(media > faturamento.Dia5){
    console.log("O faturamento do dia 5 é MENOR que a média")
}
else if (media <= faturamento.Dia5){
    console.log("O faturamento do dia 5 é MAIOR ou IGUAL a média")
}

if(media > faturamento.Dia6){
    console.log("O faturamento do dia 6 é MENOR que a média")
}
else if (media <= faturamento.Dia6){
    console.log("O faturamento do dia 6 é MAIOR ou IGUAL a média")
}

if(media > faturamento.Dia7){
    console.log("O faturamento do dia 7 é MENOR que a média")
}
else if (media <= faturamento.Dia7){
    console.log("O faturamento do dia 7 é MAIOR ou IGUAL a média")
}

if(media > faturamento.Dia8){
    console.log("O faturamento do dia 8 é MENOR que a média")
}
else if (media <= faturamento.Dia8){
    console.log("O faturamento do dia 8 é MAIOR ou IGUAL a média")
}

if(media > faturamento.Dia9){
    console.log("O faturamento do dia 9 é MENOR que a média")
}
else if (media <= faturamento.Dia9){
    console.log("O faturamento do dia 9 é MAIOR ou IGUAL a média")
}

if(media > faturamento.Dia10){
    console.log("O faturamento do dia 10 é MENOR que a média")
}
else if (media <= faturamento.Dia10){
    console.log("O faturamento do dia 10 é MAIOR ou IGUAL a média")
}

if(media > faturamento.Dia11){
    console.log("O faturamento do dia 11 é MENOR que a média")
}
else if (media <= faturamento.Dia11){
    console.log("O faturamento do dia 11 é MAIOR ou IGUAL a média")
}

if(media > faturamento.Dia12){
    console.log("O faturamento do dia 12 é MENOR que a média")
}
else if (media <= faturamento.Dia12){
    console.log("O faturamento do dia 12 é MAIOR ou IGUAL a média")
}

if(media > faturamento.Dia13){
    console.log("O faturamento do dia 13 é MENOR que a média")
}
else if (media <= faturamento.Dia13){
    console.log("O faturamento do dia 13 é MAIOR ou IGUAL a média")
}

if(media > faturamento.Dia14){
    console.log("O faturamento do dia 14 é MENOR que a média")
}
else if (media <= faturamento.Dia14){
    console.log("O faturamento do dia 14 é MAIOR ou IGUAL a média")
}

if(media > faturamento.Dia15){
    console.log("O faturamento do dia 15 é MENOR que a média")
}
else if (media <= faturamento.Dia15){
    console.log("O faturamento do dia 15 é MAIOR ou IGUAL a média")
}

if(media > faturamento.Dia16){
    console.log("O faturamento do dia 16 é MENOR que a média")
}
else if (media <= faturamento.Dia16){
    console.log("O faturamento do dia 16 é MAIOR ou IGUAL a média")
}

if(media > faturamento.Dia17){
    console.log("O faturamento do dia 17 é MENOR que a média")
}
else if (media <= faturamento.Dia17){
    console.log("O faturamento do dia 17 é MAIOR ou IGUAL a média")
}

if(media > faturamento.Dia18){
    console.log("O faturamento do dia 18 é MENOR que a média")
}
else if (media <= faturamento.Dia19){
    console.log("O faturamento do dia 19 é MAIOR ou IGUAL a média")
}

if(media > faturamento.Dia20){
    console.log("O faturamento do dia 20 é MENOR que a média")
}
else if (media <= faturamento.Dia20){
    console.log("O faturamento do dia 20 é MAIOR ou IGUAL a média")
}

if(media > faturamento.Dia21){
    console.log("O faturamento do dia 21 é MENOR que a média")
}
else if (media <= faturamento.Dia21){
    console.log("O faturamento do dia 21 é MAIOR ou IGUAL a média")
}

if(media > faturamento.Dia22){
    console.log("O faturamento do dia 22 é MENOR que a média")
}
else if (media <= faturamento.Dia22){
    console.log("O faturamento do dia 22 é MAIOR ou IGUAL a média")
}







/* 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

SP – R$67.836,43
RJ – R$36.678,66
MG – R$29.229,88
ES – R$27.165,48
Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora. */

var sp = (67.83643);
var rj = (36.67866);
var mg = (29.22988);
var es = (27.16548); 15
var OutrosEstados = (19.84953);
var ValorTotal = parseFloat (rj) + parseFloat (sp) + parseFloat (mg) + parseFloat (es) + parseFloat (OutrosEstados)

var RepresentacaoSP = 37.7;
var RepresentacaoRJ = 20.3
var RepresentacaoMG= 16.2;
var RepresentacaoES = 15;
var RepresentacaoOutrosEstados= 10.8;
console.log(`O valor total da soma dos estatos é igual a ${ValorTotal}`);
console.log(`Dentro do VALOR TOTAL, o percentual de representação do Estado de São Paulo corresponde a ${RepresentacaoSP}%`)
console.log(`Dentro do VALOR TOTAL, o percentual de representação do Estado do Rio de Janeiro corresponde a ${RepresentacaoRJ}%`)
console.log(`Dentro do VALOR TOTAL, o percentual de representação de Minas Gerais corresponde a ${RepresentacaoMG}%`)
console.log(`Dentro do VALOR TOTAL, o percentual de representação do Estado do Espírito Santo corresponde a ${RepresentacaoES}%`)
console.log(`Dentro do VALOR TOTAL, o percentual de representação dos demais Estados corresponde a ${RepresentacaoOutrosEstados}%`)


/* 5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;*/

var ValoEntrada = ["b","a","n","a","n","a"];
var ValoEntrada2 = "banana"
console.log(`A String é: ${ValoEntrada2}`)
console.log(`A String ${ValoEntrada2} invertida é: ${(ValoEntrada[5])}${(ValoEntrada[4])}${(ValoEntrada[3])}${(ValoEntrada[2])}${(ValoEntrada[1])}${(ValoEntrada[0])}`)

//NÃO SE ESQUEÇA DE INSERIR O LINK DO SEU REPOSITÓRIO NO GITHUB COM O CÓDIGO FONTE QUE VOCÊ DESENVOLVEU

