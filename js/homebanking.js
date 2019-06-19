//Declaración de variables

var nombreUsuario = "Agustin Botella";

var saldoCuenta = 50000;

var limiteExtraccion = 5000;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {

    var nuevoLimite = parseInt(prompt("Ingresa tu nuevo limite de extraccion"));
    limiteExtraccion = nuevoLimite;
    alert("Tu nuevo limite de extraccion es: $"+limiteExtraccion);
    actualizarLimiteEnPantalla();
    
}

function extraerDinero() {

    var monto = parseInt(prompt("Cuanto dinero deseas extraer?"));
    
        //Valido que el monto sea multiplo de 100
        if (monto%100 == 0) {
    
            //Valido que el monto a extraer no supere el limite de extraccion
            if (monto <= limiteExtraccion) {

                //Valido que el monto a extraer no supere el saldo en cuenta
                if (monto <= saldoCuenta) {
                    var saldoAnterior = saldoCuenta;
                saldoCuenta = saldoCuenta - monto;
                actualizarSaldoEnPantalla();
                alert("Has extraido: $"+monto+'\n'+
                     "Saldo anterior: $"+(saldoAnterior)+'\n'+
                     "Saldo actual: $"+saldoCuenta);
                } else {
                    alert("Tu saldo es insuficiente");
                }
            }
            else {
                alert("La operacion supera tu limite de extraccion");
            }
        }
        else {
            alert("Solo es posible retirar de a multiplos de $100");
        }
}

function depositarDinero() {
    
    var monto = parseInt(prompt("Cuanto dinero deseas depositar?"));
    var saldoAnterior = saldoCuenta;
    saldoCuenta = saldoCuenta + monto;
    actualizarSaldoEnPantalla();
    alert("Has depositado: $"+monto+'\n'+
         "Saldo anterior: $"+(saldoAnterior)+'\n'+
         "Saldo actual: $"+saldoCuenta);
}

function pagarServicio() {

}

function transferirDinero() {

}

function iniciarSesion() {

}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}
