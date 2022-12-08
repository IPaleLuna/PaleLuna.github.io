const planets = document.querySelectorAll(".PlanetCard");
let pointer = 0;
let currentPlanet = planets[pointer];
const nxtBtn = document.querySelector("#nxt-btn");
const preBtn = document.querySelector("#pre-btn");

nxtBtn.addEventListener("click", () => {
    pointer = ((pointer+1 < planets.length) ? ++pointer : 0);

    let nextPlanet = planets[pointer];
    nextPlanet.classList.add("active");

    currentPlanet.classList.remove("active");
    currentPlanet = nextPlanet;
    
});
preBtn.addEventListener("click", () => {
        pointer = ((pointer-1 >= 0) ? --pointer : planets.length-1);

        let prevPlanet = planets[pointer];
        prevPlanet.classList.add("active");

        currentPlanet.classList.remove("active");
        currentPlanet = prevPlanet;

});