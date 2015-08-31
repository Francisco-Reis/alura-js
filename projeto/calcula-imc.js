function calculaTodosOsIMCs() {
    var tablePacientes = document.getElementsByClassName('paciente');

    percorreArray(tablePacientes, function (tdPaciente, paciente) {
            var tdImc = tdPaciente.getElementsByClassName("info-imc")[0];
            var imc  = paciente.pegaImc();
            tdImc.textContent = imc;
    })
}

var botao = document.getElementById('bt-calcula-imc');
botao.onclick = calculaTodosOsIMCs;
