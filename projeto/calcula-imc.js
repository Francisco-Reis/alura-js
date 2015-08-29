var tablePacientes = document.getElementsByClassName('paciente');

for (var posicaoAtual = 0; posicaoAtual < tablePacientes.length; posicaoAtual++) {

    var tdPaciente = tablePacientes[posicaoAtual];
    var paciente = {
        nome : tdPaciente.getElementsByClassName("info-nome")[0].textContent,
        peso : tdPaciente.getElementsByClassName("info-peso")[0].textContent,
        altura : tdPaciente.getElementsByClassName("info-altura")[0].textContent,

    };

    if (paciente.altura > 0) {
       var imc = tdPaciente.getElementsByClassName("info-imc")[0];
       imc.textContent = paciente.peso / (paciente.altura * paciente.altura);
       console.log(imc);
    } else {
       console.log("Altura precisa ser maior que zero");
    }

}
