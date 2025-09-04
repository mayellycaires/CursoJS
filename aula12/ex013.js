var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são extamente ${hora} horas.`)
if(hora < 12){ // Se a hora for a baixo de 12
    console.log('Bom Dia!')
} else if(hora <= 17){ // Se a hora for menor ou igual a 17
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}