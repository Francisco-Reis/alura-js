function montaPaciente(tdPaciente) {
    var paciente = {
        nome : tdPaciente.getElementsByClassName("info-nome")[0].textContent,
        peso : tdPaciente.getElementsByClassName("info-peso")[0].textContent,
        altura : tdPaciente.getElementsByClassName("info-altura")[0].textContent,
        pegaImc : function () {
            if (this.altura > 0) {
               return this.peso / (this.altura * this.altura)

            } else {
               console.log("Altura precisa ser maior que zero");
            }
        }
    };
    return paciente
};
