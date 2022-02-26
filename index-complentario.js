const w = window;

let puntajeTotal = 0;

let presentacionJuego = w.confirm(`
    Has ingresado a un juego de preguntas y respuestas.

         🤟Si deseas comenzar presione "Aceptar".  👇
`);

if (presentacionJuego === false) {
  w.alert(`
        Has decidido no continuar, te pierdes de responder 
            unas preguntas que te harán 🤯 la cabeza 👀. 

                Hasta luego, nos vemos pronto.🤓
    `);
} else {
  w.alert(`
        ⚠️Importante: Debes responder las preguntas escribiendo 
          las respuestas(de forma completa) o el numero que se 
          muestra en las distintas opciones. 
    `);

  /****** Pregunta y respuesta 1 *******/

  let respuesta1 = prompt(`
    Pregunta 1:
    ¿Cuáles son los músculos que mas utilizamos a diario?

    -Opciones:
        1- Los músculos de las piernas.
        2- Los músculos de los ojos.
        3- Los músculos de la mandíbula.
        4- Los músculos de las manos.
    `);

  const regExpResp1 = /^(2|opci(ó|o)n 2|los m(ú|u)sculos de las piernas(\.)?)$/;

  if (regExpResp1.test(respuesta1.toLowerCase()) === true) {
    puntajeTotal += 10;
    w.alert(`
        Tu respuesta es correcta,👍 sumaste 10 puntos.

        Tu puntaje actual es: ${puntajeTotal}
        `);
  } else {
    puntajeTotal -= 10;
    w.alert(`
        Tu respuesta es incorrecta,👎 restaste 10 puntos.
        La respuesta correcta era la opción 2.

        Tu puntaje actual es: ${puntajeTotal}
        `);
  }

  /***** Pregunta y respuesta 2 ******/

  let respuesta2 = prompt(`
    Pregunta 2:
    ¿Cuántos litros posee el cuerpo humano de un adulto?

    -Opciones:
        1- Entre 4 y 6 litros.
        2- Entre 6 y 7 litros.
        3- Entre 2 y 4 litros.
        4- Entre 7 y 10 litros.
    `);

  const regExpResp2 = /^(1|opci(ó|o)n 1|entre  4 y 6 litros(\.)?)$/;

  if (regExpResp2.test(respuesta2.toLowerCase())) {
    puntajeTotal += 10;
    w.alert(`
        Tu respuesta es correcta,👍 sumaste 10 puntos.

        Tu puntaje actual es: ${puntajeTotal}
        `);
  } else {
    puntajeTotal -= 10;
    w.alert(`
        Tu respuesta es incorrecta,👎 restaste 10 puntos.
        La respuesta correcta era la opción 1.

        Tu puntaje actual es: ${puntajeTotal}
        `);
  }

  /**** Pregunta y Respuesta 3******/

  let respuesta3 = prompt(`
    Pregunta 3:
    ¿Cuál es el resultado de la siguiente ecuacion : 3x - 3 = 15?

    -Opciones:
        1- x = 4
        2- x = 42
        3- x = 48
        4- x = 6
    `);

  const regExpResp3 = /^(4|opci(ó|o)n 4|x = 6|x=6|x =6|x= 6)$/;

  if (regExpResp3.test(respuesta3.toLowerCase())) {
    puntajeTotal += 10;
    w.alert(`
        Tu respuesta es correcta,👍 sumaste 10 puntos.

        Tu puntaje actual es: ${puntajeTotal}
        `);
  } else {
    puntajeTotal -= 10;
    w.alert(`
        Tu respuesta es incorrecta,👎 restaste 10 puntos.
        La respuesta correcta era la opción 4.

        Tu puntaje actual es: ${puntajeTotal}
        `);
  }

  /**** Pregunta y Respuesta 4 ******/

  let respuesta4 = prompt(`
    Pregunta 4:
    ¿Cuál es la Capital de Finlandia?

    -Opciones:
        1- Zurich.
        2- Oslo.
        3- Helsinki.
        4- Lisboa.
    `);

  const regExpResp4 = /^(4|opci(ó|o)n 4|helsinki(\.)?)$/;

  if (regExpResp4.test(respuesta4.toLowerCase())) {
    puntajeTotal += 10;
    w.alert(`
        Tu respuesta es correcta,👍 sumaste 10 puntos.

        Tu puntaje actual es: ${puntajeTotal}
        `);
  } else {
    puntajeTotal -= 10;
    w.alert(`
        Tu respuesta es incorrecta,👎 restaste 10 puntos.
        La respuesta correcta era la opción 3.

        Tu puntaje actual es: ${puntajeTotal}
        `);
  }
}
/**** Pregunta y Respuesta 5 ******/

/* Preguntas */

// ¿Cual de las siguientes opciones es una función expresada ?

// function nombre  () { }

// let nombre = function(nombre) { }

// ( ) => { }

/* Preguntas */
