import other from './other.js';


document.querySelector("#add").onclick = addNewPlant;

const input = document.querySelector("#pltype");

input.addEventListener('keypress', e => {
    if (e.keyCode == '13') addNewPlant();
})

loadPlant();

function addNewPlant(e) {
    const plant = { id: Date.now(), content: input.value, completed: false };
    input.value = "";
    const plantID = createPlant(plant);
    other.savePlant(plant);
    loadPlant();

}
function createPlant(plant) {
    const plantDiv = document.createElement('div');
    plantDiv.classList.add('plant');

    const completeBtn = document.createElement('button');
    completeBtn.setAttribute('data-id', plant.id);
    completeBtn.classList.add('complete-btn');

    const plantContent = document.createElement('div')
    plantContent.innerText = plant.content;
    plantContent.classList.add('plant-content');

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('data-id', plant.id);
    deleteBtn.classList.add('plant-delete-btn');
    deleteBtn.innerText = "Delete";
    deleteBtn.onclick = deletePlant;

    plantDiv.appendChild(completeBtn);
    plantDiv.appendChild(plantContent);
    plantDiv.appendChild(deleteBtn);

    return plantDiv;

}
function addPlant(plantDiv) {
    document.querySelector('#plant').appendChild(plantDiv);
}
function loadPlant() {
    document.querySelector('#plant').innerHTML = '';
    const plants = other.getPlant();
    
    plants.forEach(plant => {
        const el = createPlant(plant)
        addPlant(el);
    })
}
function deletePlant(e) {
    const btn = e.currentTarget;
    other.deletePlant(btn.getAttribute('data-id'));
    document.querySelector('#plant').innerHTML = ' ';
    loadPlant();

}

