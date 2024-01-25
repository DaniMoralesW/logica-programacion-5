// Generar un número aleatorio entre 1 y 100
let randomNum = Math.floor(Math.random() * 100) + 1;

// Contador de intentos del jugador
let contadorIntentos = 1;

// Elementos del DOM
const intentoSumiteado = document.querySelector(".intentoSumiteado");
const intentos = document.querySelector(".intentos");
const ultResult = document.querySelector(".ultResult");
const campoIntentos = document.querySelector(".campoIntentos");
const lowOrHi = document.querySelector(".lowOrHi");

// Función para manejar el juego cuando termina
function setGameOver() {
    campoIntentos.disabled = true;
    intentoSumiteado.disabled = true;
    const resetButton = document.createElement("button");
    resetButton.textContent = "Iniciar nuevo juego";
    document.body.append(resetButton);
    resetButton.addEventListener("click", resetGame);
}

// Función para comprobar el número ingresado por el jugador
function checkNum() {
    let intentoUsuario = Number(campoIntentos.value);

    if (Number.isInteger(intentoUsuario) && intentoUsuario >= 1 && intentoUsuario <= 100) {
        if (contadorIntentos === 1) {
            intentos.textContent = "Intentos anteriores: ";
        }
        intentos.textContent += intentoUsuario + " ";
    
        if (contadorIntentos === 1) {
            intentos.textContent = "Intentos anteriores: ";
        }
        intentos.textContent += intentoUsuario + " ";

        // Si el número es correcto
        if (intentoUsuario === randomNum) {
            ultResult.textContent = "¡Felicidades! ¡Lo adivinaste!";
            ultResult.style.backgroundColor = "green";
            console.log("Felicidades, adivinaste el número secreto.");
            console.log("Lista de números introducidos antes de adivinar:");
            console.log(intentos.textContent);
            setGameOver();
        } else if (contadorIntentos === 10) {
            // Si se agotan los intentos
            ultResult.textContent = "¡Fin del juego!";
            setGameOver();
        } else {
            // Si el número es incorrecto
            ultResult.textContent = "¡Casi! Pero... prueba con otro.";
            ultResult.style.backgroundColor = "magenta";
            if (intentoUsuario < randomNum) {
                lowOrHi.textContent = "¡El número es muy bajo!";
            } else if (intentoUsuario > randomNum) {
                lowOrHi.textContent = "¡El número es muy grande!";
            }
        }
    } else {
         alert("Debes ingresar un número entero positivo entre 1 y 100 :(");
        return;
    }


    contadorIntentos++;
    campoIntentos.value = "";
    campoIntentos.focus();
}

// Función para reiniciar el juego
function resetGame() {
    contadorIntentos = 1;
    ultResult.textContent = "";
    intentos.textContent = "";
    campoIntentos.disabled = false;
    intentoSumiteado.disabled = false;
    campoIntentos.value = "";
    campoIntentos.focus();
    ultResult.style.backgroundColor = "white";
    randomNum = Math.floor(Math.random() * 100) + 1;
}

// Escuchar evento de clic en el botón de sumisión
intentoSumiteado.addEventListener("click", checkNum);
