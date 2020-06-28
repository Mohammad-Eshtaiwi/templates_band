"use strict";
let index = 0;
const locations = [
  document.querySelector(".chicago"),
  document.querySelector(".new-york"),
  document.querySelector(".los-angeles"),
];

function refreshLocation() {
  console.log("hi");

  // hide all locations
  locations.map((location) => {
    location.style.display = "none";
  });
  console.log(locations[index]);
  //  display location with given index
  locations[index].style.display = "block";
  //   increment the index and reset it if less than 3

  index++;
  if (index === locations.length) index = 0;
}

setInterval(refreshLocation, 3000);
