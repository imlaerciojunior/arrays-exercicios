//  EXERCÍCIO III

//copia exercício I

//a))

const numerosVariados = [11,24,3,2023,13]

//b)

const apenasStrings = ["Biju", "Shoyo", "garrafa", "Mozão"]

//c)

const arrayVariado = [11, "musica", false]


// III 

const numerosVariadosCopia = numerosVariados.slice()

const apenasStringsCopia = apenasStrings.slice()

const arrayVariadoCopia = arrayVariado.slice()

//a)

const adicionaNumero = numerosVariadosCopia.unshift(7)
console.log(`Array original`, numerosVariados)
console.log(`Array copia`, numerosVariadosCopia)


//b)

const removeItem = apenasStringsCopia.pop()
console.log(`Array Original`, apenasStrings)
console.log(`Array copia`, apenasStringsCopia)


//c)

const removaItemVariado = arrayVariadoCopia.splice(1,1)
console.log(`Array original`, arrayVariado)
console.log(`Array copia`, arrayVariadoCopia)
