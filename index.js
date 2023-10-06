const input = document.getElementById('search');

input.addEventListener("change", (e) => {
    // Retrait potentiel de la majuscule au début du mot
    input.value = input.value.toLowerCase();
    fetch("https://pokeapi.co/api/v2/pokemon/" + input.value)
    .then((resp => resp.json()))
    .then ((data) => {
        document.getElementById('height').innerHTML = `Height: ${data.height}`;
        document.getElementById('weight').innerHTML = `Weight: ${data.weight}`
        document.getElementById('base_exp').innerHTML = `Expérience: ${data.base_experience}`;
        document.getElementById('name').innerHTML = `${data.name}`
    })
    fetch("https://pokeapi.co/api/v2/pokemon-species/" + input.value) 
    .then((resp) => resp.json())
    .then((data) => {
        document.getElementById('growth_rate').innerHTML = `Growth rate: ${data.growth_rate["name"]}`;
        document.getElementById('capture_rate').innerHTML = `Capture Rate : ${data.capture_rate}`;
        document.getElementById('habitat').innerHTML = `Habitat: ${data.habitat["name"]}`;
        document.getElementById('shape').innerHTML = `Shape: ${data.shape["name"]}`
        document.getElementById('color').innerHTML = `Color: ${data.color["name"]}`
        setEvolutions(data.id);
    })
    fetch("https://pokeapi.co/api/v2/pokemon/" + input.value)
    .then((resp) => resp.json())
    .then((data) => {
        document.getElementById('img_poke').src = data.sprites["front_default"];
    });



})




function setEvolutions(id) {
    fetch("https://pokeapi.co/api/v2/evolution-chain/" + id)
    .then((resp) => resp.json())
    .then((data) => {
        for(let i = 0; i < data.chain.evolves_to.length; i++) {
            document.getElementById('evolutions').innerHTML += `<li>${data.chain.evolves_to[i].species["name"]}</li>`
        }

    })
}
