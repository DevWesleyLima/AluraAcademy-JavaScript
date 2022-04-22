/*
 *  Forms
 */

//  VAR
let botaoAdicionar =  document.querySelector('#adicionar-paciente');

//  Functions
botaoAdicionar.addEventListener("click", function(event)
{
    event.preventDefault();
    
    adicionarPacienteTabela("formulario", form);     
})
