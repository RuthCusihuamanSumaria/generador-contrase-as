//declaracion de variables
let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabvdefghijklmnopqrstuvwxyz0123456789';

function generar(){

    let numeroDigitado=parseInt(cantidad.value);
    //console.log(numeroDigitado);

    if(numeroDigitado < 8){
        alert("La cantidad de caracteres tiene que ser mayor que 8");
    }

    let password='';

    for(let i=0; i< numeroDigitado ;i++){
        //calcular la posicion del caracter que vamos a capturar
        //redondear, numero aleatorio(entre 0 y 1), obtener la longitud de la cadena
        //obtener el caracter----- cadena[]
        let caracterAleatorio =cadenaCaracteres[Math.floor(Math.random()*cadenaCaracteres.length)];
        //console.log(caracterAleatorio);

        password+= caracterAleatorio; //concatenar y asignar


    }
    //console.log("password geenerada : " + password);
    contrasena.value=password;

}

/*let texto="texto";
console.log(typeof texto);
console.log(typeof cantidad);
console.log(typeof boton);*/
//console.log(typeof numeroDigitado);












