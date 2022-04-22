/*
 *  Buscar Paciente
 */

//  VAR
let botaoBuscarPacientes = document.querySelector("#buscar-pacientes");

//  Buscar Paciente da Tabela
botaoBuscarPacientes.addEventListener("click", function()
{
    //https://api-pacientes.herokuapp.com/pacientes
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function()
    {
        let erroAjax = document.querySelector("#erro-ajax");

        if (xhr.status == 200)
        {
            let resposta = xhr.responseText;
            let pacientes = JSON.parse(resposta);

            erroAjax.classList.add("invisivel");

            for (i = 0; i < pacientes.length; i++) {
                adicionarPacienteTabela("importarJson", pacientes[i]);
            }
        }
        else
        {
            //  console.log(xhr.status);
            //  console.log(xhr.responseText);            
            erroAjax.classList.remove("invisivel");
        }

        
    })
    xhr.send();
})