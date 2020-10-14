const range = function(start, end, step){
  let array = []
  if (start === end === step === undefined || start > end || step <= 0) {
    return array = []
  } else{
    
    for (let i = start; i <= end; i = i + step){
      array.push(i)
    }
  }
  return array
}

console.log(range(0, 8, 2));