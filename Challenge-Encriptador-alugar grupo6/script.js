//call variables a las funciones 

var encriptarTextoboton = document.querySelector(".btn-encriptar");
var desencriptarTextoBoton = document.querySelector(".btn-desencriptar");
var emoticon = document.querySelector(".contenedormunieco");
var cuadroTexto = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".texto-resultado");

encriptarTextoboton.onclick = encriptarTextoForm;
desencriptarTextoBoton.onclick = desencriptarTextoForm;

function encriptarTextoForm(){
    ocultarElementosPagina();
    var cuadroTexto = rescastarInfoCuadro()
    resultado.textContent = encriptarTextoAgregado(cuadroTexto);
}

function desencriptarTextoForm(){
    ocultarElementosPagina();
    var cuadroTexto = rescastarInfoCuadro()
    resultado.textContent = desencriptarTexto(cuadroTexto);
}

function rescastarInfoCuadro(){
    var cuadroTexto = document.querySelector(".cajatexto")
    return cuadroTexto.value
}

function ocultarElementosPagina(){
    //emoticon.classList.add("ocultar");
    cuadroTexto.classList.add("ocultar");
}

function encriptarTextoAgregado(mensaje) {
    var texto = mensaje;
    var textoEscrito = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoEscrito = textoEscrito + "az";
        } else if (texto[i] == "e") {
            textoEscrito = textoEscrito + "eb";
        } else if (texto[i] == "i") {
            textoEscrito = textoEscrito + "ic";
        } else if (texto[i] == "o") {
            textoEscrito = textoEscrito + "od";
        } else if (texto[i] == "u") {
            textoEscrito = textoEscrito + "uf";
        } else {
            textoEscrito = textoEscrito + texto[i];
        }
    }
    return textoEscrito;
}

function desencriptarTexto(mensaje) {
    var texto = mensaje;
    var textoEscrito = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a" && texto[i + 1] == "z") {
            textoEscrito = textoEscrito + "a";
            i = i + 1;
        } else if (texto[i] == "e" && texto[i + 1] == "b") {
            textoEscrito = textoEscrito + "e";
            i = i + 1;
        } else if (texto[i] == "i" && texto[i + 1] == "c") {
            textoEscrito = textoEscrito + "i";
            i = i + 1;
        } else if (texto[i] == "o" && texto[i + 1] == "d") {
            textoEscrito = textoEscrito + "o";
            i = i + 1;
        } else if (texto[i] == "u" && texto[i + 1] == "f") {
            textoEscrito = textoEscrito + "u";
            i = i + 1;
        } else {
            textoEscrito = textoEscrito + texto[i];
        }
    }

    return textoEscrito;
}

// Ejemplo de uso
var mensajeOriginal = "hola como estan";
var mensajeEncriptado = encriptarTextoAgregado(mensajeOriginal);
console.log("Mensaje encriptado:", mensajeEncriptado);

var mensajeDesencriptado = desencriptarTexto(mensajeEncriptado);
console.log("Mensaje desencriptado:", mensajeDesencriptado);


// Ejemplo de uso
var mensajeOriginal = "hola";
var mensajeEncriptado = encriptarTextoAgregado(mensajeOriginal);
console.log("Mensaje encriptado:", mensajeEncriptado);

var mensajeDesencriptado = desencriptarTexto(mensajeEncriptado);
console.log("Mensaje desencriptado:", mensajeDesencriptado);


const btnCopiar = document.querySelector(".btn-copiar"); 
    btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("hola"); 
});