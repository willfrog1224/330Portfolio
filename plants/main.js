// import other from './other.js';


// document.querySelector("#add").onclick = addNewPlant;

// const input = document.querySelector("#pltype");

// input.addEventListener('keypress', e => {
//     if (e.keyCode == '13') addNewPlant();
// })

// loadPlant();

// function addNewPlant(e) {
//     const plant = { id: Date.now(), content: input.value, completed: false };
//     input.value = "";
//     const plantID = createPlant(plant);
//     other.savePlant(plant);
//     loadPlant();

// }
async function loadPlants() {
    const response = await fetch('https://willfrog1224.github.io/330Portfolio/plants/plants.json');
    const plants = await response.json();
    console.log(plants); 
    loadPlant(plants)
    
  }
  
loadPlants()
function createPlant(plant) {
    const plantDiv = document.createElement('div');
    plantDiv.classList.add('plant');

    const completeBtn = document.createElement('button');
   // completeBtn.setAttribute('data-id', plant.id);
    completeBtn.classList.add('complete-btn');

    const plantContent = document.createElement('div')
    plantContent.innerText = plant.name;
    plantContent.classList.add('plant-content');

    const deleteBtn = document.createElement('button');
   // deleteBtn.setAttribute('data-id', plant.id);
    deleteBtn.classList.add('plant-delete-btn');
    deleteBtn.innerText = "Delete";
  //  deleteBtn.onclick = deletePlant;

    plantDiv.appendChild(completeBtn);
    plantDiv.appendChild(plantContent);
    plantDiv.appendChild(deleteBtn);

    return plantDiv;

}
//function addPlant(plantDiv) {
  //  document.querySelector('#plant').appendChild(plantDiv);
//}
function loadPlant(array) {
    let final_plant = document.querySelector('#plant').innerHTML = '';
   // const plants = other.getPlant();
    
    array.forEach(plant => {
        const el = createPlant(plant)
        final_plant.appendChild(el)
    })
}
function deletePlant(e) {
    const btn = e.currentTarget;
    other.deletePlant(btn.getAttribute('data-id'));
    document.querySelector('#plant').innerHTML = ' ';
    loadPlant();

}

