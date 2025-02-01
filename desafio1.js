

//Crie uma variável chamada nome e atribua seu nome a ela. Em seguida, exiba o valor dessa variável.
var nome = "Victor"
console.log(nome);

//Crie duas variáveis: uma chamada idade e outra chamada altura. Atribua a idade o valor 25 e a altura o valor 1.75. Exiba ambos os valores.

var idade = 25;
var altura = 1.75;
console.log(idade);
console.log(altura);

//Crie uma variável chamada preco com o valor 50 e uma variável desconto com o valor 0.2 (20%). Calcule o preço com desconto e exiba o valor final.

var preco = 50;
var desconto = 0.2;
var valorDesconto = preco * desconto;
var precoComDesconto = preco - valorDesconto;
console.log(precoComDesconto);

//Crie uma variável chamada temperatura e atribua o valor 30. Se a temperatura for maior que 25, exiba a mensagem "Está calor!". Caso contrário, exiba "Está fresco

var temperatura = 30;
if (temperatura > 25) {
  console.log("Está calor!");
} else {
  console.log("Está fresco");
}

//Crie uma variável idade e atribua um valor. Se a pessoa for maior de idade (18 ou mais), exiba "Você é maior de idade". Caso contrário, exiba "Você é menor de idade".

var idade = 19;
if (idade >= 18) {
  console.log("Você é maior de idade");
} else {
  console.log("Você é menor de idade");
}

//Crie uma variável chamada nota e atribua um valor entre 0 e 10. Se a nota for maior ou igual a 7, exiba "Aprovado". Se for entre 5 e 6, exiba "Recuperação". Caso contrário, exiba "Reprovado".

var nota = 8;
if (nota >= 7) {
  console.log("Aprovado");
} else if (nota >= 5 && nota < 7) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}

//Crie duas variáveis, numero1 e numero2, e atribua valores a elas. Verifique se os dois números são iguais e, caso sejam, exiba "Os números são iguais". Caso contrário, exiba "Os números são diferentes".

var numero1 = 5;
var numero2 = 5;
if (numero1 === numero2) {
  console.log("Os números são iguais");
} else {
  console.log("Os números são diferentes");
}


//Crie uma variável chamada nome e uma variável chamada idade. Exiba a mensagem "Olá, meu nome é [nome] e eu tenho [idade] anos", utilizando concatenação.    


var nome = "Victor";
var idade = 10;
console.log("Olá, meu nome é " + nome + " e eu tenho " + idade + " anos");

//Crie um loop que imprima os números de 1 a 10 na tela.

for (var i = 1; i <= 10; i++) {
  console.log(i);
}

//Crie um loop que peça ao usuário para digitar um número até que ele digite o número 5.

var numero = 0;
while (numero!== 5) {
  numero = parseInt(prompt("Digite um número:"));
}

//Crie um loop que imprima a tabuada do número 7, de 1 a 10.

for (var i = 1; i <= 10; i++) {
  console.log(7 + " x " + i + " = " + (7 * i));
}


//Crie um loop que exiba todos os números pares de 0 a 20.

for (var i = 0; i <= 20; i += 2) {
  console.log(i);
}


//Escreva um código que calcule a área de um círculo. Utilize uma função para realizar o cálculo. A função deve receber o raio como parâmetro e retornar a área.

function calcularAreaCirculo(raio) {
  var area = Math.PI * Math.pow(raio, 2);
  return area;
}


//Comente seu código explicando o que cada parte faz. Crie um programa simples que calcule a soma de dois números e imprima o resultado.


//Declarando duas variáveis e atribuindo valores a elas
var numero1 = 5;
var numero2 = 10;

//Somando as duas variáveis e armazenando o resultado em uma nova variável
var soma = numero1 + numero2;

//Imprimindo o resultado na tela
console.log("A soma dos números é:", soma);

//15. Refatore o código abaixo para que seja mais legível, usando boas práticas de nomenclatura e separando o código em funções:

x = 10

y = 20

z = x+y

console.log(z)

//Refatorado:


function somarNumeros(num1, num2) {
  var resultado = num1 + num2;
  console.log(resultado);
}

