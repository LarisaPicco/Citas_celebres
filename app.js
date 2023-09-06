let botonElem = document.getElementById('boton-cambiar-cita')
let citaElem = document.getElementById('cita')
let autorElem = document.getElementById('autor')

/*Para generar citas aleatorias tenemos que generar un entero aleatorio */
function generarEnteroAleatorio(min, max) { /*vamos a generar un entero aleatorio en un rango, desde un num min
hasta un numero max, el maximo no se incluye en los valores posibles */
                                              /*PORQUE EL ULTIMO INDICE EN UN ARRAY SIEMPRE ES SU TAMAÑO - 1
                                                        Ej: 6 elementos -1= el ultimo tiene indice 5, porque el primero 
                                                        ya }comienza en 0 */
                         
                        /*esta es la dif entre el max y el min */
return Math.floor(Math.random( ) * (max-min) + min)
    /*este es un num entre 0 y 1 */
} 
     function cambiarCita() {                                       /*el tamaño maximo del array citas, que indica la cantidad de elementos del array*/
        let indiceAleatorio = generarEnteroAleatorio(0, citas.length)
                                            /*primer elemento del array citas, con indice 0 */
            citaElem.innerText = `"${citas[indiceAleatorio].texto}"`;
            autorElem.innerText = citas[indiceAleatorio].autor;
                                        
        } 
  /*una vez que tenemos el indice aleatorio, cambiamos la cita que se le muestra al usuario*/
 cambiarCita()   /*se llama a la funcion */+

 /*hacemos el evento */

 botonElem.addEventListener('click', cambiarCita) /*la funcion a ejecutar al hacer click en el boton */