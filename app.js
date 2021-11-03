// SIGNIN-SIGNUP ANIMATION

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const logo = document.querySelector(".logo-roxo")

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
  logo.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
  logo.classList.remove("sign-up-mode");
});


// FORM FOCUS ANIMATION

const inputs = document.querySelectorAll(".input")

function focusFunc() {
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");
  parent.addEventListener('input', validate);
}

function blurFunc() {
  let parent = this.parentNode.parentNode;
    if(this.value == "") {
    parent.classList.remove("focus");
  } 
  
}

inputs.forEach(input => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
})


// VALIDATION

const form = document.querySelector('.sign-in-form');
const form_up = document.querySelector('.sign-up-form');
const h5_cpf = document.querySelector('#cpf');
const h5_senha = document.querySelector('#senha');
const h5_cpfUp = document.querySelector('#cpf-up');
const h5_nome = document.querySelector('#nome');
const h5_email = document.querySelector('#email');


let cpf = form.elements['cpf'];
let senha = form.elements['senha']
let cpf_up = form_up.elements['cpf-up'];
let nome = form_up.elements['nome'];
let email = form_up.elements['email'];

cpf.addEventListener('input', validate);
senha.addEventListener('input', validate);
cpf_up.addEventListener('input', validate);
nome.addEventListener('input', validate);
email.addEventListener('input', validate);


// FORM VALIDATION

function validate(e) {
  let target = e.target.name;

  if (target == 'cpf') {
    validateCPF();
  }

  if (target == 'senha') {
    validateSenha();
  }
  
  if (target == 'cpf-up') {
    validateCPFUp();
  }

  if (target == 'nome') {
    validateNome();
  }
  
  if (target == 'email') {
    validateEmail();
  }
}

// MASKS

function fMasc(objeto,mascara) {
  obj=objeto
  masc=mascara
  setTimeout("fMascEx()",1)
}

function fMascEx() {
obj.value=masc(obj.value)
}

function CPF(i){
  i=i.replace(/\D/g,"")
  i=i.replace(/(\d{3})(\d)/,"$1.$2")
  i=i.replace(/(\d{3})(\d)/,"$1.$2")
  i=i.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
  return i
}

function Senha(i){
  i=i.replace(/[^a-zA-Z0-9!@#$%^&]/gmi,"")
  return i
}

function Nome(i){
  i=i.replace(/[^a-z ]/gmi,"")
  return i
}

function validateCPF(){
  var e = cpf.value
	var cpfValido = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/;	 
	if (cpfValido.test(e))	{ 
    h5_cpf.classList.remove('invalid')
	} else	{	 
    h5_cpf.classList.add('invalid')
	}

}

function validateCPFUp(){
  var e = cpf_up.value
	var cpfValido = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/;	 
	if (cpfValido.test(e))	{ 
    h5_cpfUp.classList.remove('invalid')
	} else	{	 
    h5_cpfUp.classList.add('invalid')
	}

}

function validateSenha(){	
  var e = senha.value
  var senhaValida  = /^[a-zA-Z0-9!@#$%^&*]{7,16}$/;
	if (senhaValida.test(e))	{ 
    h5_senha.classList.remove('invalid')
	} else	{	 
    h5_senha.classList.add('invalid')
	}
}

function validateNome(){	
  var e = nome.value
  var nomeValida  = /^[a-zA-Z]+$/;
	if (nomeValida.test(e))	{ 
    h5_nome.classList.remove('invalid')
	} else	{	 
    h5_nome.classList.add('invalid')
	}
}
