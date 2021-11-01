let colaboradores = [];
let projetos = [];
let contadorIdProjetos = 1;
let contadorIdColaboradores = 1;

class Validacoes{
    validaIsNumber(dado){
        if(isNaN(parseFloat(dado))){
            alert('Não foi inserido um número!')
            return false;
        } else {
            return true;
        }
    }
    validaIsNotEmpty(dado){
        if(dado == '' || dado == undefined || dado == null){
            alert('Dado inserido incorretamente');
            return false;
        } else{
            return true;
        }
    }
    validaIdExiste(id,array){
        if(array.some(dado => dado.id === id)){
            return true;
        } else{
            alert(`O ID inserido não remete a nenhum cadastrado no sistema!`);
            return false;
        }
    }
    validaColaboradorJaEstaEmProjeto(id){
        let colaborador = colaboradores.find(colaborador => colaborador.id == id);
        if(colaborador.codProjeto != 0){
            alert('O colaborador com esse ID já está em um projeto no momento! Desaloque ele primeiro antes de aloca-lo em outro projeto');
            return true;
        } else {
            return false;
        }
    }
    validaColaboradorPodeDesalocar(id){
        let colaborador = colaboradores.find(colaborador => colaborador.id == id);
        if(colaborador.codProjeto != 0){
            return true;
        } else {
            alert('O colaborador com esse ID não está em nenhum projeto!');
            return false;
        }
    }
}

class Marcacao{
    dia = 0;
    horas = 0;
    constructor(dia,horas){
        this.dia = new Validacoes().validaIsNumber(dia) ? dia : this.dia;
        this.horas = new Validacoes().validaIsNumber(horas) ? horas : this.horas;
    }
}


class Colaborador{
    id = 0;
    nome = 'Não informado';
    codProjeto = 0;
    marcacoesPonto = [];

    constructor(id,nome){
        this.id = new Validacoes().validaIsNumber(id) ? id : this.id;
        this.nome = new Validacoes().validaIsNotEmpty(nome) ? nome : this.nome;
    }
    
    marcarPonto(d,h){
        this.marcacoesPonto.push(new Marcacao(d,h));
    }
}

class Projeto{
    id = 0;
    titulo = 'Não informado';
    colaboradoresAlocados = [];
    constructor(id,titulo){
        this.id = new Validacoes().validaIsNumber(id) ? id : this.id;
        this.titulo = new Validacoes().validaIsNotEmpty(titulo) ? titulo : this.titulo;
    }
}

do{
    var resp = prompt(` Sistema de projetos e alocações \n 
    1 - Cadastrar Colaborador \n 
    2 - Cadastar Projeto \n
    3 - Alocar Colaborador \n
    4 - Desacolar Colaborador \n
    5 - Marcar Ponto \n
    6 - Mostrar colaboradores sem projeto \n
    7 - Mostrar lista de projetos sem colaboradores \n
    8 - Mostrar lista de colaboradores que ainda não marcaram o ponto \n
    9 - Desligar Sistema \n
    `);
    switch(resp){
        case '1':
            //pedindo o nome do colaborador
            let nome = prompt('Qual o nome do colaborador?');
            if(!new Validacoes().validaIsNotEmpty(nome)) break;
            //criando o colaborador
            colaboradores.push(new Colaborador(contadorIdColaboradores,nome));
            ///avisando o sucesso na criação
            alert(`Colaborador ${nome} de ID ${contadorIdColaboradores} cadastrado com sucesso!`);
            //incrementando o id pro próximo colaborador
            contadorIdColaboradores++;
            console.log('\nConsole de cada elemento da lista => ', ...colaboradores);
            break;
        case '2':
            //pedindo o titulo do projeto
            let titulo = prompt('Qual o título do projeto?');
            if(!new Validacoes().validaIsNotEmpty(titulo)) break;
            //Criando o projeto
            projetos.push(new Projeto(contadorIdProjetos,titulo));
            //avisando o sucesso na criação
            alert(`Projeto ${titulo} de ID ${contadorIdProjetos} cadastrado com sucesso!`);
            //incrementando o id pro proximo projeto
            contadorIdProjetos++;
            console.log('\nConsole de cada elemento da lista => ', ...projetos);
            break;
        case '3':
            //pedindo o id do colaborador
            let idColaboradorAlocado = prompt('Qual o id do colaborador que deseja alocar?');
            idColaboradorAlocado = parseFloat(idColaboradorAlocado);
            //verificações
            if(!new Validacoes().validaIsNumber(idColaboradorAlocado) ||
             !new Validacoes().validaIdExiste(idColaboradorAlocado,colaboradores) ||
              new Validacoes().validaColaboradorJaEstaEmProjeto(idColaboradorAlocado)) break;
            // pedindo o id do projeto
            let idProjetoAlocar = prompt(`Qual o id do projeto que deseja alocar o colaborador de ID ${idColaboradorAlocado}`);
            idProjetoAlocar = parseFloat(idProjetoAlocar);
            //verificações
            if(!new Validacoes().validaIsNumber(idProjetoAlocar) || !new Validacoes().validaIdExiste(idProjetoAlocar,projetos)) break;
            //pegando o projeto do id informado
            let projeto = projetos.find(projeto => projeto.id == idProjetoAlocar);
            //pegando o colaborador do id informado
            let colaborador = colaboradores.find(colaborador => colaborador.id == idColaboradorAlocado);
            //inserindo o colaborador no array do projeto
            projeto.colaboradoresAlocados.push(colaborador);
            //inserindo no colaborador qual o projeto que ele está
            colaborador.codProjeto = idProjetoAlocar;
            alert(`O colaborador ${colaborador.nome} foi alocado do projeto ${projeto.titulo}`);
            console.log('\nConsole de cada elemento da lista => ', ...colaboradores);
            console.log('\nConsole de cada elemento da lista => ', ...projetos);
            break;
        case '4':
            //pedindo o id do colaborador que deseja desalocar  
            let idColaboradorADesalocar = parseFloat(prompt('Qual o id do colaborador que deseja desalocar'));
            //verificações
            if(!new Validacoes().validaIsNumber(idColaboradorADesalocar) ||
            !new Validacoes().validaIdExiste(idColaboradorADesalocar,colaboradores) ||
            !new Validacoes().validaColaboradorPodeDesalocar(idColaboradorADesalocar)) break;
            //pegando as informações do projeto e do colaborador
            let colaboradorADesalocar = colaboradores.find(colaborador => colaborador.id == idColaboradorADesalocar);
            let projetoADesalocar = projetos.find(projeto => projeto.id == colaboradorADesalocar.codProjeto);
            //confirmação
            if(confirm(`Tem certeza que deseja desalocar o colaborador ${colaboradorADesalocar.nome} de ID ${colaboradorADesalocar.id} do projeto ${projetoADesalocar.titulo} de ID ${projetoADesalocar.id}?`)){
                //retirando o projeto da classe do colaborador
                colaboradorADesalocar.codProjeto = 0;
                //retirando o colaborador do array do projeto
                projetoADesalocar.colaboradoresAlocados = projetoADesalocar.colaboradoresAlocados.filter(colaborador => colaborador.id != colaboradorADesalocar.id);
                alert('Colaborador desalocado!');
            }
            console.log('\nConsole de cada elemento da lista => ', ...colaboradores);
            console.log('\nConsole de cada elemento da lista => ', ...projetos);
            break
        case '5':
            //pedindo o id do colaborador que vai marcar o ponto
            let idColaboradorMarcarPonto = parseFloat(prompt('Qual o id do colaborador que irá marcar o ponto?'));
            //pegando as informações do colaborador
            let colaboradorAMarcarPonto = colaboradores.find(colaborador => colaborador.id == idColaboradorMarcarPonto);
            //verificações
            if(!new Validacoes().validaIsNumber(idColaboradorMarcarPonto) ||
            !new Validacoes().validaIdExiste(idColaboradorMarcarPonto,colaboradores)) break;
            //pedindo a hora
            let horaPonto = parseFloat(prompt('Qual a hora do ponto?'));
            if(!new Validacoes().validaIsNumber(horaPonto)) break;
            //pedindo o dia
            let diaPonto = parseFloat(prompt('Qual o dia do ponto?'));
            if(!new Validacoes().validaIsNumber(diaPonto)) break;
            if(confirm(`Confirma marcar o ponto de ${colaboradorAMarcarPonto.nome} no dia ${diaPonto} as ${horaPonto} horas?`)){
                colaboradorAMarcarPonto.marcarPonto(horaPonto,diaPonto);
                alert('Ponto marcado!');
            }
            console.log('\nConsole de cada elemento da lista => ', ...colaboradores);
            console.log('\nConsole de cada elemento da lista => ', ...projetos);
            break
        case '6':
            //criando a mensagem
            let messageColaboradorSemprojeto = 'Lista de Colaboradores sem projeto alocado: \n';
            //filtrando os colaboradores sem projeto
            let colaboradoresSemProjeto = colaboradores.filter(colaboradorFiltrar => colaboradorFiltrar.codProjeto == 0);
            //iterando sobre o array para criar a mensagem com os dados
            for(object of colaboradoresSemProjeto){
                messageColaboradorSemprojeto += 'Colaborador de nome ' + object.nome + ' e ID ' + object.id + '\n';
            }
            //exibindo a mensagem
            alert(messageColaboradorSemprojeto);
            break;
        case '7':
            //criando a mensagem
            let messageProjetoSemColaborador = 'Lista de Projetos sem nenhum colaborador alocado: \n';
            // filtrando os projetos sem colaboradores
            let projetosSemColaboradores = projetos.filter(projetoFiltrar => projetoFiltrar.colaboradoresAlocados.length == 0);
            //iterando sobre o array para criar a mensagem com os dados
            for(object of projetosSemColaboradores){
                messageProjetoSemColaborador += 'Projeto de nome ' + object.titulo + ' e ID ' + object.id + '\n';
            }
            //exibir a mensagem
            alert(messageProjetoSemColaborador);
            break
        case '8':
            //criando a mensagem
            let messageColaboradorSemPonto = 'Lista de Colaboradores sem ponto marcado: \n';
            //filtrando os colaboradores sem ponto
            let colaboradoresSemPonto = colaboradores.filter(colaborador => colaborador.marcacoesPonto.length == 0);
            //iterando sobre o array para criar a mensagem com os dados
            for(object of colaboradoresSemPonto){
                messageColaboradorSemPonto += 'Colaborador de nome ' + object.nome + ' e ID ' + object.id + '\n';
            }
            //exibindo a mensagem
            alert(messageColaboradorSemPonto);
            break;
        case '9':
            //mensagem antes de desligar o prompt
            alert('Desligando Sistema...');
            console.log('\nConsole de cada elemento da lista => ', ...colaboradores);
            console.log('\nConsole de cada elemento da lista => ', ...projetos);
            break;
        default:
            //caso o usuário não coloque nenhuma opção válida;
            alert('Opção Inválida - Caso queira desligar o sistema pressione 9');
    }
} while(resp != 9)


