const w = window,
    d = document;

w.onload = () => {

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
    }else { 
        w.alert(`
            ⚠️Importante: Debes responder las preguntas escribiendo 
            las respuestas(de forma completa) o el numero que se 
            muestra en las distintas opciones. 
        `);

    /****** Pregunta y respuesta 1 *******/

        let respuesta1 = prompt(`
        Pregunta 1:
        ¿Cuáles de los siguientes tipos de datos no es primitivo?

        -Opciones:
            1- String.
            2- Array.
            3- Number.
            4- Boolean.
        `);

        const regExpResp1 = /^(2|opci(ó|o)n(\s)?2|array(\.)?)$/  ;

        if (respuesta1 === null) {

            puntajeTotal -= 10;
            w.alert(`
            Tu respuesta es incorrecta,👎 restaste 10 puntos.
            La respuesta correcta era la opción 2.

            Tu puntaje actual es: ${puntajeTotal}
            `);

        } else {

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
        }

    /***** Pregunta y respuesta 2 ******/

        let respuesta2 = prompt(`
        Pregunta 2:
        ¿Cuál de las siguientes opciones es un bucle?

        -Opciones:
            1- for.
            2- if/else.
            3- Operador ternario. 
            4- switch.
        `);

        const regExpResp2 = /^(1|opci(ó|o)n(\s)?1|for(\.)?)$/;

        if (respuesta2 === null) {

            puntajeTotal -= 10;
            w.alert(`
            Tu respuesta es incorrecta,👎 restaste 10 puntos.
            La respuesta correcta era la opción 1.

            Tu puntaje actual es: ${puntajeTotal}
            `);

        } else {

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

        const regExpResp3 = /^(4|opci(ó|o)n(\s)?4|x(\s)?=(\s)?6)$/;

        if (respuesta3 === null) {

            puntajeTotal -= 10;
            w.alert(`
            Tu respuesta es incorrecta,👎 restaste 10 puntos.
            La respuesta correcta era la opción 4.

            Tu puntaje actual es: ${puntajeTotal}
            `);

        } else {
        
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
        }
        /**** Pregunta y Respuesta 4 ******/

        let respuesta4 = prompt(`
        Pregunta 4:
        ¿Cuáles son los músculos que mas utilizamos a diario?

        -Opciones:
            1- Los músculos de las piernas.
            2- Los músculos de los ojos.
            3- Los músculos de la mandíbula.
            4- Los músculos de las manos.
        `)

        const regExpResp4= /^(2|opci(ó|o)n(\s)?2|los m(ú|u)sculos de los ojos(\.)?)$/  ;

        if (respuesta4 === null) {

            puntajeTotal -= 10;
            w.alert(`
            Tu respuesta es incorrecta,👎 restaste 10 puntos.
            La respuesta correcta era la opción 2.

            Tu puntaje actual es: ${puntajeTotal}
            `);

        } else {

            if (regExpResp4.test(respuesta4.toLowerCase()) === true) {
                puntajeTotal += 10;
                w.alert(`
                Tu respuesta es correcta,👍 sumaste 10 puntos.

                Tu puntaje actual es: ${puntajeTotal}
                `);
            } else{
                puntajeTotal -= 10;
                w.alert(`
                Tu respuesta es incorrecta,👎 restaste 10 puntos.
                La respuesta correcta era la opción 2.

                Tu puntaje actual es: ${puntajeTotal}
                `);
            }
        }

    /**** Pregunta y Respuesta 5 ******/

        let respuesta5 = prompt(`
        Pregunta 5:
        ¿Cuales son los colores de la bandera de Bolivia?

        -Opciones:
            1- azul y verde.
            2- celeste y blanco.
            3- rojo, amarrillo y verde.
            4- rojo y blanco.
        `);

        const regExpResp5 = /^(3|opci(ó|o)n(\s)?3|rojo,(\s)?amarillo y verde(\.)?)$/;

        if (respuesta5 === null) {

            puntajeTotal -= 10;
            w.alert(`
            Tu respuesta es incorrecta,👎 restaste 10 puntos.
            La respuesta correcta era la opción 3.

            Tu puntaje actual es: ${puntajeTotal}
            `);

        } else {

            if (regExpResp5.test(respuesta5.toLowerCase())) {
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

        w.alert(`
        🔸El juego ha terminado.
        🔹Tu puntaje final es: ${puntajeTotal}

        Espero que te hayas divertido😬 
        `)
    }

};
