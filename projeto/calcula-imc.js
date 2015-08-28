var peso = 100;
var altura = 1.8;
var nome = "Francisco";

if (altura > 0) {
   var imc = peso / (altura * altura);

   console.log(imc);
} else {
   console.log("Altura precisa ser maior que zero");
}
