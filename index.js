const input = document.getElementById('search');

function lootId(value) {
    fetch("https://pokeapi.co/api/v2/pokemon-species/" + value) 
.then((resp) => resp.json())
.then((data) => {
    return data.id;
})
}




input.addEventListener("change", (e) => {
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
    })
    fetch("https://pokeapi.co/api/v2/pokemon/" + input.value)
    .then((resp) => resp.json())
    .then((data) => {
        document.getElementById('img_poke').src = data.sprites["front_default"];
    });
})




