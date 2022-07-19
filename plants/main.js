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


   // completeBtn.setAttribute('data-id', plant.id);

    const picutre = document.createElement('img')
    picutre.src = plant.image
    const plantContent = document.createElement('div')
    plantContent.innerText = plant.name;
    plantContent.classList.add('plant-content');
    const water = document.createElement('p')
    water.innerText = plant.water;
    const light = document.createElement('p')
    light.innerText = plant.light;

  //  deleteBtn.onclick = deletePlant;
  plantDiv.appendChild(picutre);
  plantDiv.appendChild(plantContent);
  plantDiv.appendChild(water);
  plantDiv.appendChild(light);


    return plantDiv;

}
//function addPlant(plantDiv) {
  //  document.querySelector('#plant').appendChild(plantDiv);
//}
function loadPlant(array) {
    let final_plant = document.querySelector('#plant');
   // const plants = other.getPlant();
    
    array.forEach(plant => {
        const el = createPlant(plant)
        console.log(el)
       final_plant.append(el)
    })
}

function search_plant() {
  let input = document.getElementById('searchbar').value
  input=input.toLowerCase();
  let x = document.getElementsByClassName('plant-content');
    
  for (i = 0; i < x.length; i++) { 
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
          x[i].style.display="none";
      }
      else {
          x[i].style.display="list-item";                 
      }
  }
}



// function populateDropdown() {

//   let plantType = [
//     "Monstera", "Fiddle Fig"
//   ]

//   let dropdown = document.getElementById('plant-dropdown');
//   dropdown.length = 0;
  
//   let defaultOption = document.createElement('option');
//   defaultOption.text = 'Choose Plant';
  
//   dropdown.add(defaultOption);
//   dropdown.selectedIndex = 0;
  
//   let option;
    
//   for (let i = 0; i < plantType.length; i++) {
//           option = document.createElement('option');
//       	  option.text = plantType[i];
//       	  option.value = plantType[i];
//       	  dropdown.add(option);
//   }

// }

