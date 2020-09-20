// Write your JavaScript code here!
window.addEventListener("load",function(){
   let form = document.getElementById("launchForm");
   form.addEventListener("submit",function(event){
      event.preventDefault();
      let pilotNameInput = form.querySelector("input[name=pilotName]");
      let coPilotNameInput = form.querySelector("input[name=copilotName]");
      let fuelLevelInput = form.querySelector("input[name=fuelLevel]");
      let cargoMassInput = form.querySelector("input[name=cargoMass]");

      if(pilotNameInput.value === ""){
         alert("please enter a pilot name.");
      } else if(coPilotNameInput.value === ""){
         alert("please enter a co-pilot name.");
      } else if(fuelLevelInput.value === ""){
         alert("please enter a Fuel Level.");
      } else if(cargoMassInput.value === ""){
         alert("please enter a Cargo Mass.");
      } else if(isNaN(fuelLevelInput.value) === true || isNaN(cargoMassInput.value) === true || isNaN(pilotNameInput.value) === false || isNaN(coPilotNameInput.value) === false){
         alert("Please enter valid information in each field.");
      } else if(coPilotNameInput.value === ""|| pilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "")
      {
         alert("all fields are required.");
      } else if(fuelLevelInput.value < 10000){
         document.getElementById("fuelStatus").innerHTML = (`Fuel level of ${fuelLevelInput.value} is too low to launch.`)
         document.getElementById("faultyItems").style.visibility = "visible"
         document.getElementById("launchStatus").innerHTML = ('Shuttle not ready for launch')
         document.getElementById("launchStatus").style.color =  "red";
      } else if(cargoMassInput.value > 10000){
         document.getElementById("cargoStatus").innerHTML = (`Cargo mass total of ${cargoMassInput.value} is too high to launch.`)
         document.getElementById("faultyItems").style.visibility = "visible"
         document.getElementById("launchStatus").innerHTML = ('Shuttle not ready for launch')
         document.getElementById("launchStatus").style.color =  "red";
      } else {
      document.getElementById("pilotStatus").innerHTML = (`Pilot ${pilotNameInput.value} is ready for launch.`)
      document.getElementById("copilotStatus").innerHTML = (`Co-pilot ${coPilotNameInput.value} is ready for launch.`)
      document.getElementById("fuelStatus").innerHTML = (`Fuel Level ${fuelLevelInput.value}l is high enough for launch.`)
      document.getElementById("cargoStatus").innerHTML = (`Cargo Mass ${cargoMassInput.value}kg is low enough for launch.`)
      document.getElementById("launchStatus").innerHTML = 'Shuttle is ready for launch'
      document.getElementById("launchStatus").style.color = "green"
      document.getElementById("faultyItems").style.visibility = "visible"
      console.log(fetch('https://handlers.education.launchcode.org/static/planets.json').then(function(response){
         return response.json();
      }))
      let missionPlanet = Math.round(Math.random()*5);
      fetch('https://handlers.education.launchcode.org/static/planets.json').then(function(response){
         return response.json().then(function(json){
            document.getElementById("missionTarget").innerHTML = 
            `<h2>Mission Destination</h2>
               <ol>
                  <li>Name: ${json[missionPlanet].name}</li>
                  <li>Diameter: ${json[missionPlanet].diameter}</li>
                  <li>Star: ${json[missionPlanet].star}</li>
                  <li>Distance from Earth: ${json[missionPlanet].distance}</li>
                  <li>Number of Moons: ${json[missionPlanet].moons}</li>
               </ol>
               <img src="${json[missionPlanet].image}">`
         })
      })
      }
   })
   })


/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
