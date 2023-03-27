let form = document.getElementById('idDoForm')
let btnAdiciona = document.getElementById('adiciona')
let formNome = document.getElementById('nome')
let formCel = document.getElementById('numeroCel');
let formCartao = document.getElementById('numeroCartao')
let formCep = document.getElementById('cep')
const lista = document.getElementById("lista")
const item = JSON.parse(localStorage.getItem("item")) || []
let alertaPlano = document.querySelector('.alerta-escolha-plano')
let alertaPreencheCampo = document.querySelector('.alerta-preenche-campo')
const btnConcordo = document.querySelector('.btn-concordo')
let mensagem = ''
let btnSubmitSenha = document.getElementById('submitSenha')
let elementSenha = document.getElementById('senha-funcionario')
let alertaPreenchaASenha = document.querySelector('.alerta-preenche-senha')
let alertaSenhaInvalida = document.querySelector('.alerta-senha-invalida')
let perfil = typeof item[0] == undefined ? item[0].perfil : 0;

if(item.length > 0) {
  mensagem = 'Obrigado por assinar o nosso jornal!'
} else {
  mensagem = 'Você ainda não assinou nosso Jornal. Vamos assinar agora?'
}
item.forEach((elemento) => {
    criaPopUp(elemento)
})
form.addEventListener("submit", (event) => {
    event.preventDefault()
    const nome = event.target.elements['nome']
    const existe = item.find( elemento => elemento.nome === nome.value )
    const selecionado = document.querySelector('.selecionado');
    const itemAtual = {
        "nome": nome.value,
        "perfil": perfil,
        "plano": plano
    }
    if(!selecionado) {
      alertaPlano.classList.remove('d-none')
      formNome.focus()
      throw new Error('Escolha um plano antes de continuar') 
    } else if (nome.value == '' || formCel.value == '' || formCartao.value == '' || formCep.value == '') {
      alertaPreencheCampo.classList.remove('d-none')
      formNome.focus()
      throw new Error('Preencha todos os campos primeiro')
    } else if (existe) {
      alert('Você já tem uma conta no nosso jornal!')
      limpaFormulario()
      formNome.focus()
      throw new Error('Conta já existente!')
    } else {
      deletaItem(this.parentNode, item.id);
      criaConta(itemAtual);
      criaPopUp(itemAtual);
      formNome.focus();
      alertaPlano.classList.add('d-none')
      alertaPreencheCampo.classList.add('d-none')
    }
  localStorage.setItem("item", JSON.stringify(item))
  limpaFormulario()
})
function criaConta(itemAtual) {
  mensagem = 'Obrigado por assinar o nosso jornal!';
  item.splice(0, 1);
  itemAtual.id = item[item.length -1] ? (item[item.length-1]).id + 1 : 0;
  item.push(itemAtual);
  location.reload;
}
function criaPopUp(item){
  lista.innerHTML = `
    <h1>${mensagem}</h1>
    <li id="li">${item.nome}</li>
    <button class="btnRemover d-none" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Remover Conta</button>
  `
  criaBotaoDeleta(item.id)
}
function criaBotaoDeleta(id) {
  const btnDeleta = document.querySelector('.btnRemover')
  btnDeleta.classList.remove('d-none');
  btnDeleta.addEventListener("click", chamaOEventoDeCliqueQueRemove(id));
}
function chamaOEventoDeCliqueQueRemove(id) {
  const removeConta = document.querySelector('.btnAccountRemove')
  removeConta.addEventListener('click', () => {
    deletaItem(id);
    mensagem = 'Você ainda não assinou nosso Jornal. Vamos assinar agora?';
    location.reload;
  })
}
function deletaItem(id) { 
  let btnDeleta = document.querySelector('.btnRemover')
  item.splice(item.findIndex(elemento => elemento.id === id), 1);
  localStorage.removeItem("item", JSON.stringify(item));
  btnDeleta.classList.add('d-none');
  location.reload
}
function limpaFormulario() {
  let inputs = document.querySelectorAll('.input')
  inputs.forEach(element => {
    element.value = ''
  })
}

// SENHA [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[|]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

btnSubmitSenha.addEventListener('click', (e) => {
  e.preventDefault()
  let senha = e.target.parentNode.children[3].value
  if (senha == '') {
      alertaPreenchaASenha.classList.remove('d-none')
      throw new Error('Preencha o campo antes de prosseguir')
  } else {
      alertaPreenchaASenha.classList.add('d-none')
      verificaSeASenhaEstaCorreta(senha)
      elementSenha.value = ''
  }
})
// Senha REDATOR: 23!#h47&4F_2
// Senha ADMINISTRADOR DO SITE: *dB78@(3o4¨
// Senha ADMINISTRADOR GERAL: $pI2%8fY3@#
function verificaSeASenhaEstaCorreta(senha) {
  if(senha == "23!#h47&4F_2") {
      alertaSenhaInvalida.classList.add('d-none')
      perfil = 1;
  } else if(senha == "*dB78@(3o4¨") {
      alertaSenhaInvalida.classList.add('d-none')
      perfil = 2;
  } else if(senha == "$pI2%8fY3@#") {
      alertaSenhaInvalida.classList.add('d-none')
      perfil = 3;
  } else {
      alertaSenhaInvalida.classList.remove('d-none')
  }
  item[0].perfil = perfil
  localStorage.setItem("item", JSON.stringify(item))
}

// SENHA [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[|]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
