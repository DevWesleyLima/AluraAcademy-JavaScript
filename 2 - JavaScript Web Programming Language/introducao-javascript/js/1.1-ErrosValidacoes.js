/*
 *  Erros e Validações
 */

//  Functions
function validaPaciente(paciente)
{
    let erros = [];
    
    //  Checar campos em branco
    if(paciente.nome.length == 0)
    {
        erros.push(`Nome em branco!`)
    }

    if(paciente.peso.length == 0)
    {
        erros.push(`Peso em branco!`)
    }

    if(paciente.altura.length == 0)
    {
        erros.push(`Altura em branco!`)
    }
    
    if(paciente.gordura.length == 0)
    {
        erros.push(`(%)Gordura Corporal em branco!`)
    }

    //  Validar peso e altura   
    if (checarPeso(paciente.peso) == false)
    {
        erros.push(`Peso inválido!`);
    }

    if (checarAltura(paciente.altura) == false)
    {
        erros.push(`Altura inválida!`);
    }

    return erros;
}

function exibeMensagemDeErro(erros)
{
    let ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro)
    {
        let li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}