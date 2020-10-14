const chooseStations = function(stations){
  let goodStations = [];
  for (let i = 0; i < stations.length; i++){
    if (stations[i][1] >= 20 && (stations[i][2] === 'school' || stations[i][2] === 'community centre')) {
      goodStations.push(stations[i][0]);
    }
  }
  return goodStations
}

// const chooseStations = function(stations){
//   let goodStations = [];
//   for (astation of stations){
//     if (astation[1] > 20){
//       goodStations.push(astation[0]);
//     }
//   }
//   console.log(goodStations)
// }

const station = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

console.log(chooseStations(station));
