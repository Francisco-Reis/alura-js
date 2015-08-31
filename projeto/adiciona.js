var btAdd = document.querySelector('#add-paciente');

btAdd.addEventListener('click',function (event) {

    event.preventDefault();

    var nome = document.querySelector('#campo-nome');
    var peso = document.querySelector('#campo-peso');
    var altura = document.querySelector('#campo-altura');

    var novoPaciente = '<tr class="paciente">'+
                            '<td class="info-nome">'+ nome.value +'</td>'+
                            '<td class="info-peso">'+ peso.value +'</td>'+
                            '<td class="info-altura">'+altura.value +'</td>'+
                            '<td class="info-imc"></td>'+
                        '</tr>';

    var tabela = document.querySelector('table');
    tabela.innerHTML += novoPaciente;

    nome.value = "";
    peso.value = "";
    altura.value = "";

    calculaTodosOsIMCs();
});
