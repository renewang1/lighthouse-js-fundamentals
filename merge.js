// const merge = function(array1, array2){
//   let newArray = []
//   for (let i = 0; i < array1.length; i++){
//     if (i === 0){
//       newArray.push(array1[i])
//     } else if (array1[i] > newArray[newArray.length - 1]){
//       newArray.push(array1[i])
//     } else {
//       for (let j = newArray.length - 1; j >= 0; j--){
//         if (array1[i] > newArray[j]){
//           newArray.splice(j, 0, array1[i])
//           break;
//         }
//       }
//     }
//   }
//   for (let i = 0; i < array2.length; i++){
//     if (array2[i] > newArray[newArray.length - 1]){
//       newArray.push(array2[i])
//     } else {
//       for (let j = newArray.length - 1; j >= 0; j--){
//         if (array2[i] > newArray[j]){
//           newArray.splice(j, 0  , array2[i])
//           break;
//         }
//       }
//     }
//   }
//   return newArray
// }

// console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]))

const merge = function(array1, array2){
  let newArray = array1.concat(array2)
  newArray.sort(function(a, b){ return a - b })
  return newArray
}
console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]))