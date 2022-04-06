// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum };



const fromDollarToYen = function(valueInDollar){
    // convertimos el valor a dolares
    let valueInYen= valueInDollar * 106.5833333333333;
    // retornamos el valor
    return valueInYen;
}

const fromEuroToDollar = function(valueInEuro){
        // convertimos el valor a euros
        let valueInDollar= valueInEuro * 1.2;
        // retornamos el valor
        return valueInDollar;
}


const fromYenToPound = function(valueInYen){
    // convertimos el valor a yen
    let valueInPound= valueInYen * 0.0062548866301798;
    // retornamos el valor
    return valueInPound;
}

module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound };
