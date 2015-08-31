function percorreArray(tablePacientes, comportamento) {
    for (var posicaoAtual = 0; posicaoAtual < tablePacientes.length; posicaoAtual++) {

        var tdPaciente = tablePacientes[posicaoAtual];

        var paciente = montaPaciente(tdPaciente);

        comportamento(tdPaciente, paciente);
    }
};
