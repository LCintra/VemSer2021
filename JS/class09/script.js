class Colaborador{
    nome;
    email;
    senha;
    data;
    constructor(nome,email,senha,data){
        this.nome = this.colocarMaisculas(nome)
        this.email = email;
        this.senha = senha;
        this.data = data;
    }
    colocarMaisculas(string){
        let stringArray = string.split(' ');
        for(let i = 0; i<stringArray.length;i++){
            stringArray[i] = stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1).toLowerCase();
        }
        stringArray = stringArray.join(' ');
        return stringArray
    }
    
}

//#region Validação Nome
const validarNome = (tipo) =>{
    let nomeDigitado = tipo == 'cadastro' ? document.getElementById('name-input-registration').value : document.getElementById('name-input-edit').value

    let erroNome = tipo =='cadastro' ? document.getElementById('name-registration-error') : document.getElementById('name-edit-error');
    
    let arrayNome = [...nomeDigitado]
    let somenteLetras = !arrayNome.every(letra => letra.toLowerCase() != letra.toUpperCase() || letra == ' ')

    let ehValido = !somenteLetras
    erroNome.setAttribute('class', ehValido ? 'd-none' : 'text-danger');
    return ehValido
}

//#region Validação Email
const validarEmail = (tipo) => {
    let emailDigitado = tipo == 'cadastro' ? document.getElementById('email-input-registration').value : document.getElementById('email-input-edit').value;

    let erroEmail = tipo == 'cadastro' ? document.getElementById('email-registration-error') : document.getElementById('email-edit-error');

    let listaCaracteres = emailDigitado.split(''); // [...emailDigitado]

    let emailSplit = emailDigitado.split('@');
    
    let possuiArroba = emailSplit.length > 1;

    let dominioEmail = possuiArroba ? emailSplit[1] : '';
    let dominioEmailSplit = dominioEmail.split('.');

    let possuiPontosNoDominio = dominioEmailSplit.length > 1;

    let possuiCaracteresEntrePontos = dominioEmailSplit.every( d => d.length > 1 );

    let comecaComLetra = listaCaracteres.length ? listaCaracteres[0].toUpperCase() !== listaCaracteres[0].toLowerCase() : false;

    let ehValido = possuiArroba && possuiPontosNoDominio && possuiCaracteresEntrePontos && comecaComLetra;

    // para setar o texto de erro em vermelho
    
    erroEmail.setAttribute('class', ehValido ? 'd-none' : 'text-danger');

    return ehValido;
}
//#endregion Validação Email

//#region Validação Senha
const validarSenha = (tipo) => {
    let senhaDigitada = tipo == 'cadastro' ? document.getElementById('password-input-registration').value : document.getElementById('password-input-edit').value;

    let erroSenha = tipo == 'cadastro' ? document.getElementById('password-registration-error') : document.getElementById('password-edit-error');

    let listaCaracteres = senhaDigitada.split('');

    let letras = listaCaracteres.filter( char => char.toLowerCase() !== char.toUpperCase() );

    let possuiLetraMaiuscula = letras.some( l => l.toUpperCase() === l ); // "A".toUppercase() === "A"
    let possuiLetraMinuscula = letras.some( l => l.toLowerCase() === l );

    let possuiCharEspecial = listaCaracteres.some( char => char.toLowerCase() === char.toUpperCase() && isNaN(parseInt(char)) );
    let possuiNumero = listaCaracteres.some( char => char.toLowerCase() === char.toUpperCase() && !isNaN(parseInt(char)) );

    let possuiOitoCaracteres = senhaDigitada.length >= 8;

    let naoPossuiEspacos = !senhaDigitada.includes(' ');

    let ehValido = possuiOitoCaracteres && possuiLetraMaiuscula && possuiLetraMinuscula && 
        possuiCharEspecial && possuiNumero && naoPossuiEspacos;

    // para setar o texto de erro em vermelho
    erroSenha.setAttribute('class', ehValido ? 'd-none' : 'text-danger');

    return ehValido;
}
//#endregion Validação Senha

//#region Validação Data
const validarData = (tipo) => { 
    let inputData = tipo == 'cadastro' ? document.getElementById('date-input-registration') : document.getElementById('date-input-edit');
    let erroData = tipo == 'cadastro' ? document.getElementById('date-registration-error') : document.getElementById('date-edit-error');
    let dataDigitada = inputData.value;

    adicionarMascaraData(inputData, dataDigitada);

    let dataConvertida = moment(dataDigitada, 'DDMMYYYY');

    let dezoitoAnosAtras = moment().diff(dataConvertida, 'years') >= 18;

    // comparações de data - date1.isBefore(date2)  /  date1.isAfter(date2)  /  date1.isSameOrBefore(date2)  /  date1.isSameOrAfter(date2)
    let dataAnteriorHoje = dataConvertida.isBefore(moment());

    let ehValido = dataConvertida.isValid() && dataAnteriorHoje && dezoitoAnosAtras && dataDigitada.length === 10; // 10/05/2001

    // para setar o texto de erro em vermelho
    erroData.setAttribute('class', ehValido ? 'd-none' : 'text-danger');

    return ehValido;
}

const adicionarMascaraData = (input, data) => {
    let listaCaracteres = [...data];
    // [ '1', '0', '0', '5' ]
    
    if(listaCaracteres && listaCaracteres.length) {
        let dataDigitada = listaCaracteres.filter(c => !isNaN(parseInt(c))).reduce((a, b) => a + b);
        // 10052
        const { length } = dataDigitada;

        switch(length) { 
            case 0: case 1: case 2:
                input.value = dataDigitada; 
                break;
            case 3: case 4:
                input.value = `${dataDigitada.substr(0, 2)}/${dataDigitada.substr(2, 2)}`; // 10/05
                break;
            default:
                input.value = `${dataDigitada.substr(0, 2)}/${dataDigitada.substr(2, 2)}/${dataDigitada.substr(4, 4)}`;
        }
    }
}
//#endregion Validação Data


const resetarCampos = (...campos) => {
    campos.forEach(c => c.value = '');
}

const irPara = (origem, destino) => {
    let elementoOrigem = document.getElementById(origem);
    let elementoDestino = document.getElementById(destino);
    elementoDestino.className = elementoDestino.className.replace('d-none', 'd-flex');
    elementoOrigem.className = elementoOrigem.className.replace('d-flex', 'd-none');
}



const validarLogin = () => {
    axios.get('http://localhost:3000/colaboradores')
        .then(response => {
            let emailDigitado = document.getElementById('email-input-login').value;
            let senhaDigitada = document.getElementById('password-input-login').value;
            
            let podeLogar = response.data.some(c => c.email === emailDigitado && c.senha === senhaDigitada);

            if(podeLogar) {
                irPara('login', 'home');
            }
        })
        .catch(error => console.error(error));
}

const removerColaborador = (e) =>{
    let idASerRemovido = e.target.id
    axios.delete(`http://localhost:3000/colaboradores/${idASerRemovido}`)
    .then(response =>{
        console.log('Usuário removido com sucesso')
    })
    .catch(error =>{
        console.log(error)
    })
}

const pegarDadosAoEditar = (e) =>{
    let idASerEditado = e.target.id
    let formEdit = document.getElementById('edit')
    let formList = document.getElementById('home')
    formEdit.className = formEdit.className.replace('d-none', 'd-flex');
    formList.className = formList.className.replace('d-flex', 'd-none');

    let nomeInput = document.getElementById('name-input-edit')
    let dataInput = document.getElementById('date-input-edit')
    let emailInput = document.getElementById('email-input-edit')
    let senhaInput = document.getElementById('password-input-edit')
    let editInput = document.getElementById('id-input-edit')

    axios.get(`http://localhost:3000/colaboradores/${idASerEditado}`)
    .then(response =>{
        nomeInput.value = response.data.nome
        dataInput.value = response.data.data
        emailInput.value = response.data.email
        senhaInput.value = response.data.senha
        editInput.value = response.data.id
    })
}


const validarEdicao = (tipo) =>{
    let cadastroValido = validarData(tipo) && validarEmail(tipo) && validarSenha(tipo) && validarNome(tipo)
    if(cadastroValido){
        encerrarEdicao()
    } else {
        console.log('Edição Inválida')
    }
}

const encerrarEdicao = () =>{
    let nomeInput = document.getElementById('name-input-edit')
    let dataInput = document.getElementById('date-input-edit')
    let emailInput = document.getElementById('email-input-edit')
    let senhaInput = document.getElementById('password-input-edit')
    let idASerEditado = document.getElementById('id-input-edit').value

    let colaboradorAtualizado = new Colaborador(nomeInput.value,emailInput.value,senhaInput.value,dataInput.value)

    axios.put(`http://localhost:3000/colaboradores/${idASerEditado}`,colaboradorAtualizado)
    .then(response =>{
        console.log(response)
    })
}


const listarUsuarios = () => {
    axios.get('http://localhost:3000/colaboradores')
    .then(response =>{
        let listaUsuarios = document.getElementById('user-list')
        listaUsuarios.innerHTML = ''
        response.data.map(info => {
            let nomeColaborador = document.createTextNode(info.nome)
            let newSpan = document.createElement('span')
            newSpan.appendChild(nomeColaborador)
            let newLi = document.createElement('li')

            let trashIcon = document.createElement('i')
            trashIcon.setAttribute('class','fas fa-trash')
            let trashIconButton = document.createElement('button')
            trashIcon.setAttribute('id',info.id)
            trashIconButton.addEventListener('click',removerColaborador)
            trashIconButton.appendChild(trashIcon)

            let editIcon = document.createElement('i')
            editIcon.setAttribute('class','fas fa-pencil-alt')
            let editIconButton = document.createElement('button')
            editIcon.setAttribute('id',info.id)
            editIconButton.addEventListener('click',pegarDadosAoEditar)
            editIconButton.appendChild(editIcon)

            let iconsDiv = document.createElement('div')
            iconsDiv.appendChild(trashIconButton)
            iconsDiv.appendChild(editIconButton)

            newLi.appendChild(newSpan)
            newLi.appendChild(iconsDiv)

            listaUsuarios.appendChild(newLi)
        })
    })
    .catch(error => console.log(error))
};






const validarCadastro = (tipo) => {
    let cadastroValido = validarData(tipo) && validarEmail(tipo) && validarSenha(tipo) && validarNome(tipo);
    console.log(`Cadastro ${cadastroValido ? 'válido!' : 'inválido'}`);

    if(cadastroValido) {
        cadastrarUsuario();
    }
}

const cadastrarUsuario = () => {
    let nomeInput = document.getElementById('name-input-registration')
    let dataInput = document.getElementById('date-input-registration');
    let emailInput = document.getElementById('email-input-registration');
    let senhaInput = document.getElementById('password-input-registration');

    // aqui entra lógica de POST para salvar usuário

    let colaborador = new Colaborador(nomeInput.value,emailInput.value,senhaInput.value,dataInput.value )

    // Endpoint
    axios.post('http://localhost:3000/colaboradores', colaborador)
        .then((response) => {
            console.log('Colaborador cadastrado => ', response.data);
            resetarCampos(dataInput, emailInput, senhaInput);
            irPara('registration', 'login');
        })
        .catch((error) => {
            console.log('Erro => ', error);
        });
};