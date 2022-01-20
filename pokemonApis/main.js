fetch('https://pokeapi.co/api/v2/pokemon/35/')
.then(respuesta => respuesta.json())
.then(pokemon => {
let element = document.getElementById('elemento')
element.innerHTML = `<p style="text-align: center; color: brown;"> <b> ${pokemon.name}</b><p>
<img src='${pokemon.sprites.front_default}'><p>Estatura: ${pokemon.height}<p><p>Espesor: ${pokemon.weight}<p>`;
console.log(pokemon)
})
.catch(err=>console.log(err))


/*
fetch('https://pokeapi.co/api/v2/ability/4')
.then(respuesta => respuesta.json())
.then(pokemon6 => {
let element6 = document.getElementById('elemento6')
element6.innerHTML = ` <p>${pokemon6.effect}<p>`;
console.log(pokemon6)
})
.catch(err=>console.log(err))
*/


fetch('https://pokeapi.co/api/v2/pokemon/squirtle/')
.then(response => response.json())
.then(pokemon2 => {
let element2 = document.getElementById('elemento2')
element2.innerHTML = `<p style="text-align: center; color: brown;"> <b> ${pokemon2.name}</b><p>
<img src='${pokemon2.sprites.front_default}'><p>Estatura: ${pokemon2.height}<p><p>Espesor: ${pokemon2.weight}<p>`;
console.log(pokemon2)
})
.catch(err=>console.log(err))


fetch('https://pokeapi.co/api/v2/pokemon/1/')
.then(response => response.json())
.then(pokemon3 => {
let element3 = document.getElementById('elemento3')
element3.innerHTML = `<p style="text-align: center; color: brown;"> <b> ${pokemon3.name}</b><p>
<img src='${pokemon3.sprites.front_default}'><p>Estatura: ${pokemon3.height}<p><p>Espesor: ${pokemon3.weight}<p>`;
console.log(pokemon3)
})
.catch(err=>console.log(err))