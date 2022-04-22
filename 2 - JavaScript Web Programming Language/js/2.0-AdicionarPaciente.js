/*
 *  Adicionar Paciente
 */

//  VAR
let form = document.querySelector('#form-adiciona');

//  Objects
class pacienteObj
{
    constructor(tipo, local)
    {
        if (tipo == "formulario")
        {
            this.nome = local.nome.value;
            this.peso = local.peso.value;
            this.altura = local.altura.value;
            this.gordura = local.gordura.value;    
        }
        
        if (tipo == "importarJson")
        {
            this.nome = local.nome;
            this.peso = local.peso;
            this.altura = local.altura;
            this.gordura = local.gordura; 
        }        
    }
}

class addPacienteTabelaObj
{
    constructor(tipo, local)
    {   
        //  Gerar <tr>
        let pacienteTr = document.createElement("tr");
        pacienteTr.classList.add("paciente");

        //  Gerar <td>
        let nomePacienteTd = document.createElement("td");
        let pesoPacienteTd = document.createElement("td");
        let alturaPacienteTd = document.createElement("td");
        let gorduraPacienteTd = document.createElement("td");
        let imcPacienteTd = document.createElement("td");    
        nomePacienteTd.classList.add("info-nome");
        pesoPacienteTd.classList.add("info-peso");
        alturaPacienteTd.classList.add("info-altura");
        gorduraPacienteTd.classList.add("info-gordura");
        imcPacienteTd.classList.add("info-imc");
        
        //  Dados
        nomePacienteTd.textContent = obtemPacienteForm(tipo, local).nome;
        pesoPacienteTd.textContent = obtemPacienteForm(tipo, local).peso;
        alturaPacienteTd.textContent = obtemPacienteForm(tipo, local).altura;
        gorduraPacienteTd.textContent = obtemPacienteForm(tipo, local).gordura;
        imcPacienteTd.textContent = checarPacienteInvalidoAdd(pacienteTr, obtemPacienteForm(tipo, local).peso, obtemPacienteForm(tipo, local).altura);

        //  AppendChild
        pacienteTr.appendChild(nomePacienteTd);
        pacienteTr.appendChild(pesoPacienteTd);
        pacienteTr.appendChild(alturaPacienteTd);
        pacienteTr.appendChild(gorduraPacienteTd);
        pacienteTr.appendChild(imcPacienteTd);     
         
        //  Validações
        let erros = validaPaciente(obtemPacienteForm(tipo, local));
        
        if(erros.length > 0)
        {
            exibeMensagemDeErro(erros);
            return;
        }
        
        //  Inserir dados na tabela
        let tabela = document.querySelector("#tabela-pacientes");
        tabela.appendChild(pacienteTr);

        //  Resetar campos e imprimir mensagens de erro
        if(local == form)
        { 
            form.reset();
            
            let mensagensErro = document.querySelector("#mensagens-erro");
            mensagensErro.innerHTML = ``;
        }
        
    }
}

//  Functions
function obtemPacienteForm(tipo, local)
{
    return new pacienteObj(tipo, local);
}

function adicionarPacienteTabela(tipo, local)
{
    
    return new addPacienteTabelaObj(tipo, local);
}