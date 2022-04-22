/*
 *  Calcular IMC Function
 */

//  VAR
let tdPaciente = document.querySelectorAll('.paciente');
let tdPeso = document.querySelectorAll('.info-peso');
let tdAltura = document.querySelectorAll('.info-altura');
let tdGordura = document.querySelectorAll('.info-gordura');
let tdIMC = document.querySelectorAll('.info-imc');

//  Functions
function checarPeso(peso)
{    
    if(peso < 0 || peso >= 600)
    {
        return false;
    }
    return true;
}

function checarAltura(altura)
{    
    if(altura < 0 || altura >= 3)
    {
        return false;
    }
    return true;
}

function calcularIMC(peso, altura)
{
    return peso / Math.pow(altura, 2);
}

//  Checar pacientes inválidos existentes!
function checarPacienteInvalido()
{
    if (checarPeso(tdPeso[i].textContent) != true && checarAltura(tdAltura[i].textContent) != true) {
        tdPaciente[i].classList.add("paciente-invalido");
        return tdIMC[i].textContent = `Peso e altura inválidos!`;
    }

    else if (checarPeso(tdPeso[i].textContent) != true) {
        tdPaciente[i].classList.add("paciente-invalido");
        return tdIMC[i].textContent = `Peso inválido!`;
    }

    else if (checarAltura(tdAltura[i].textContent) != true) {
        tdPaciente[i].classList.add("paciente-invalido");
        return tdIMC[i].textContent = `Altura inválida!`;
    }

    else {
        return tdIMC[i].textContent = calcularIMC((tdPeso[i].textContent), (tdAltura[i].textContent)).toFixed(2);
    }
}

//  Checar pacientes inválidos formulário/tabela[Add]!
function checarPacienteInvalidoAdd(classe, peso, altura)
{
    if (checarPeso(peso) != true && checarAltura(altura) != true)
    {
        validaAddPacienteTabelaObj = false;
        classe.classList.add("paciente-invalido");
        return `Peso e altura inválidos!`;
    }

    else if (checarPeso(peso) != true)
    {
        validaAddPacienteTabelaObj = false;
        classe.classList.add("paciente-invalido");
        return `Peso inválido!`;
    }

    else if (checarAltura(altura) != true)
    {
        validaAddPacienteTabelaObj = false;
        classe.classList.add("paciente-invalido");
        return `Altura inválida!`;
    }

    else
    {
        validaAddPacienteTabelaObj = true;
        return calcularIMC((peso), (altura)).toFixed(2);
    }
}