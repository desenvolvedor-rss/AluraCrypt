
var criptografar = document.querySelector("#criptografar");
var descriptografar = document.querySelector("#descriptografar");
var textoExibido = document.querySelector(".caixaDeTexto");


//Ao realizar o clique no botão os eventos abaixos serão acionados -  "click"
criptografar.addEventListener("click", () => {
    textoExibido.value = btoa(textoExibido.value);
});

//Ao realizar o clique no botão os eventos abaixos serão acionados -  "click"
descriptografar.addEventListener("click", () => {
    textoExibido.value = atob(textoExibido.value);
});

// Ao soltar a tecla o efeito de transição para letra maiúscula será realizado - "keyup"
document.querySelector(".caixaDeTexto").addEventListener("keyup", (t) => {
    t.target.value = t.target.value.toUpperCase();
})

// atribui uma constante para a classe botão
const btn = document.querySelector(".botao");

//Ao realizar o clique no botão os eventos abaixos serão acionados -  "click"
btn.addEventListener("click", (e) => {
    navigator.clipboard.writeText(textoExibido.value);
    alert("Texto Copiado!");
});
// atribui uma constante para a classe botaoLimpar
const btnClear = document.querySelector(".botaoLimpar");

//Ao realizar o clique no botão os eventos abaixos serão acionados -  "click"
btnClear.addEventListener("click", (e) => {
    textoExibido.value = '';
})

