const PLANT_LIST = "plants";

function getPlant() {
    let plantsString = localStorage.getItem(PLANT_LIST)
    let plants = []

    if (plantsString) {
        plants = JSON.parse(plantsString)
    }

    return plants;
}

function savePlant(plant) {
    let plants = getplants();
    plants.push(plant);
    localStorage.setItem(PLANT_LIST, JSON.stringify(plants))
}

function deletePlant(id) {
    const plants = getPlant();
    let updatePlants = plants.filter( plant => plant.id != id)
    localStorage.setItem(PLANT_LIST, JSON.stringify(updatePlants))
}

export default {
    savePlant,
    deletePlant,
    getPlant
}