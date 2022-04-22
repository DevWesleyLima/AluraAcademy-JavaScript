/*
 *  Filtrar Paciente
 */

//  VAR
let campoFiltro = document.querySelector("#filtrar-tabela");

//  Filtrar Paciente da Tabela
campoFiltro.addEventListener("input", function()
{
    let pacientes = document.querySelectorAll(".paciente");
    
    if (this.value.length > 0)
    {
        for (i = 0; i < pacientes.length; i++)
        {
            let paciente = pacientes[i];
            let tdNome = paciente.querySelector(".info-nome");
            let nome = tdNome.textContent;
            let expressao = new RegExp(this.value, "i"); 
    
            if(expressao.test(nome))
            {
                paciente.classList.remove("invisivel");
            }
            else
            {
                paciente.classList.add("invisivel");
            }
    
        }
    }
    else
    {
        for (i = 0; i < pacientes.length; i++)
        {
            pacientes[i].classList.remove("invisivel");
        } 
    }
});