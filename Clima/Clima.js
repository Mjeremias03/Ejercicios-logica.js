/*
 * Crea una función que simule las condiciones climáticas (temperatura y probabilidad de lluvia)
 * de un lugar ficticio al pasar un número concreto de días según estas reglas:
 * - La temperatura inicial y el % de probabilidad de lluvia lo define el usuario.
 * - Cada día que pasa:
 *   - 10% de posibilidades de que la temperatura aumente o disminuya 2 grados.
 *   - Si la temperatura supera los 25 grados, la probabilidad de lluvia al día 
 *     siguiente aumenta en un 20%.
 *   - Si la temperatura baja de 5 grados, la probabilidad de lluvia al día 
 *     siguiente disminuya en un 20%.
 *   - Si llueve (100%), la temperatura del día siguiente disminuye en 1 grado.
 * - La función recibe el número de días de la predicción y muestra la temperatura
 *   y si llueve durante todos esos días.
 * - También mostrará la temperatura máxima y mínima de ese periodo y cuántos días va a llover.
 */


    const clima =(temperaturaInicial, probabilidadDeLluvia, dias) =>{
        let diasDeLluvia = 0
        let temperatura = temperaturaInicial
        let temperaturaMaxima  = temperatura
        let temperaturaMinima = temperatura
        for(let dia = 1; dia <= dias;dia++){
            console.log(`dia ${dia} hay una probabilidad de lluvia ${probabilidadDeLluvia}`)
            const lluvia = Math.random() < probabilidadDeLluvia / 100
            
            if(lluvia){
                temperatura -= 1
                console.log("Esta lloviendo vida")
                diasDeLluvia++;
            }

            let cambioTemperatura = Math.random() < 1 ? (Math.random() < 0.5 ? 2 : -2) : 0
            temperatura += cambioTemperatura

            if(temperatura > 25 ){
                probabilidadDeLluvia += 25
            }
            if(temperatura < 5){
                probabilidadDeLluvia -=20
            }
            if(temperatura > temperaturaInicial ){
                 temperaturaMaxima  = temperatura
            }else{
                 temperaturaMinima = temperatura
            }
        }

        console.log(`Resumen:\n`);
        console.log(`Temperatura Máxima: ${temperaturaMaxima}°C`);
        console.log(`Temperatura Mínima: ${temperaturaMinima}°C`);
        console.log(`Días de Lluvia: ${diasDeLluvia}`);
    }


    clima(10,60,7)

