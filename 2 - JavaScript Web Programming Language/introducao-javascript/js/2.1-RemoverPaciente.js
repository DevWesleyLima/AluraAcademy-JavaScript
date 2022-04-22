/*
 *  Remover Paciente
 */

//  VAR
let tabela = document.querySelector("table")

//  Remover com double-Click
tabela.addEventListener("dblclick", function(event)
{
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function()
    {
        event.target.parentNode.remove();

    },500);
})