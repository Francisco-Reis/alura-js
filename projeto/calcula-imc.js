var paciente = {};

var paciente.peso = 100;
var paciente.altura = 1.8;
var paciente.nome = "Francisco";

if (paciente.altura > 0) {
   var imc = paciente.peso / (paciente.altura * paciente.altura);

   console.log(imc);
} else {
   console.log("Altura precisa ser maior que zero");
}
