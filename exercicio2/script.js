// EXERCÍCIO II


//copia exercício I

//a))

const numerosVariados = [11,24,3,2023,13]

//b)

const apenasStrings = ["Biju", "Shoyo", "garrafa", "Mozão"]

//c)

const arrayVariado = [11, "musica", false]

console.log(numerosVariados)
console.log(apenasStrings)
console.log(arrayVariado)

// II - a)

const quantidadeItemNumerosVariados = numerosVariados.length
console.log(`a quantidadede de itens em numerosVariados`, quantidadeItemNumerosVariados)

const quantidadeItemApenasString = apenasStrings.length
console.log(`a quantidade de itens em apenasStrings`, quantidadeItemApenasString)

const quantidadeArrayVariado = arrayVariado.length
console.log(`a quantidade de itens em arrayVariado`, quantidadeArrayVariado)

//b)

const imprimaItemNumeros = numerosVariados[0]
const imprimaItemString = apenasStrings[1]
const imprimaItemVariado = arrayVariado[2]

console.log(imprimaItemNumeros, imprimaItemString, imprimaItemVariado)

//c)

const verificaItemNumeros = numerosVariados.includes(11)
const verificaVariado = arrayVariado.includes(true)

console.log(`na primeira array esta verificado o 11?`, verificaItemNumeros)
console.log(`na terceira array esta verificado true?`, verificaVariado)