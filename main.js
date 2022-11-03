let condicao = false;

class Login {
  constructor(usuario, senha) {
    this.usuario = usuario;
    this.senha = senha;
  }

  get usuario() {
    return this._usuario;
  }
  get senha() {
    return this._senha;
  }

  set usuario(usuario) {
    if (usuario.length == 0) {
      swal("ops!", "usuario nao pode ser vazio!", "error");
      condicao = true;
      return;
    }
    this._usuario = usuario;
  }
  set senha(senha) {
    if (senha.length == 0) {
      swal("ops!", "senha nao pode ser vazio!", "error");
      condicao = true;
      return;
    }
    this._senha = senha;
  }
}

class Pessoa extends Login {
  constructor(nome, sobrenome, cpf, usuario, senha, outraSenha) {
    super(usuario, senha);
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.cpf = cpf;
    this.outraSenha = outraSenha;
  }
  get cpf() {
    return this._cpf;
  }
  get outraSenha() {
    return this._outraSenha;
  }

  get nome() {
    return this._nome;
  }
  get sobrenome() {
    return this._sobrenome;
  }

  set nome(nome) {
    if (nome.length == 0) {
      swal("ops!", "Nome nao pode ser vazio!", "error");
      condicao = true;
      return true;
    }
    this._nome = nome;
  }
  set sobrenome(sobrenome) {
    if (sobrenome.length == 0) {
      swal("ops!", "Sobrenome nao pode ser vazio!", "error");
      condicao = true;
      return;
    }
    this._sobrenome = sobrenome;
  }

  set cpf(cpf) {
    if (cpf.length == 0) {
      swal("ops!", "cpf nao pode ser vazio!", "error");
      condicao = true;
      return;
    }
    this._cpf = cpf;
  }
  set outraSenha(x) {
    if (x.length == 0) {
      swal("ops!", "repetir senha nao pode ser vazio!", "error");
      condicao = true;
      return;
    }
    this._outraSenha = x;
  }

  validarSenha() {
    if (this.senha.length < 6 || this.senha.length > 12) {
      swal("ops!", "Senha invalida!", "error");
      return false;
    }
  }

  validarSenhaIguais() {
    if (this.senha != this.outraSenha) {
      swal("ops!", "senhas diferentes!", "error");
      return false;
    }
  }

  validarCpf() {
    if (this.cpf.length < 11 || this.cpf.length > 12) {
      swal("ops!", "cpf invalido!", "error");
      return false;
    }
  }

  validarUsuario() {
    if (this.usuario.length < 3 || this.usuario.length > 12) {
      swal("ops!", "usuario invalido!", "error");
      return false;
    }
  }
}

const array = [];

function pegarDados() {
  let nome = document.getElementById("nome").value;
  let sobrenome = document.getElementById("sobrenome").value;
  let cpf = document.getElementById("cpf").value;
  let usuario = document.getElementById("usuario").value;
  let senha = document.getElementById("senha").value;
  let conferirsenha = document.getElementById("vlsenha").value;

  const pessoa = new Pessoa(
    nome,
    sobrenome,
    cpf,
    usuario,
    senha,
    conferirsenha
  );

  let retorno = buscaPorUsuario(array, pessoa.usuario);

  if (
    retorno == -1 ||
    pessoa.validarSenha() == false ||
    pessoa.validarSenhaIguais() == false ||
    pessoa.validarCpf() == false ||
    condicao == true ||
    pessoa.validarUsuario == false
  ) {
  } else {
    array.push(pessoa);
    swal("valido!", `${pessoa.nome} salvo com sucesso`, "success");
    limparFormulario();
  }
}
function buscaPorUsuario(lista, dados) {
  for (let i = 0; i < lista.length; i++) {
    let usuarios = lista[i].usuario;
    if (dados == usuarios) {
      swal("ops!", "Usuario nao permetido !", "error");
      return -1;
    }
  }
}

function limparFormulario() {
  document.getElementById("nome").value = "";
  document.getElementById("sobrenome").value = "";
  document.getElementById("cpf").value = "";
  document.getElementById("usuario").value = "";
  document.getElementById("senha").value = "";
  document.getElementById("vlsenha").value = "";
}
