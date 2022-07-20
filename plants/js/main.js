async function loadPlants() {
    const response = await fetch('https://willfrog1224.github.io/330Portfolio/plants/plants.json');
    const plants = await response.json();
    console.log(plants); 
    loadPlant(plants)
  }
  

function createPlant(plant) {
    const plantDiv = document.createElement('div');
    plantDiv.classList.add('plant-name');
    const picutre = document.createElement('img')
    picutre.src = plant.image
    const plantContent = document.createElement('div')
    plantContent.innerText = plant.name;
    plantContent.classList.add('plant-content');
    const water = document.createElement('p')
    water.classList.add('water');
    water.innerText = plant.water;
    const light = document.createElement('p')
    light.classList.add('light');
    light.innerText = plant.light;

  plantDiv.appendChild(picutre);
  plantDiv.appendChild(plantContent);
  plantDiv.appendChild(water);
  plantDiv.appendChild(light);


    return plantDiv;

}

function loadPlant(array) {
    let final_plant = document.querySelector('#plant');
   // const plants = other.getPlant();
    
    array.forEach(plant => {
        const el = createPlant(plant)
        console.log(el)
       final_plant.append(el)
    })
}



loadPlants()

