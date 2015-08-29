
var paciente = {
    nome: document.getElementById('nome-1').textContent,
    peso: document.getElementById('peso-1').textContent,
    altura: document.getElementById('altura-1').textContent
};

if (paciente.altura > 0) {
   var imc = paciente.peso / (paciente.altura * paciente.altura);
   console.log(imc);
   document.getElementById('imc-1').textContent = imc;
} else {
   console.log("Altura precisa ser maior que zero");
}
