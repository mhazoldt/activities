let numbers = [4, 5, 1, 8, 9, 2];
bubbleSort(numbers); // ==> [1, 2, 4, 5, 8, 9]

function bubbleSort(list) {
  let changesMade = true;

  while(changesMade) {

    let changeOccured = false;

    for(counter = 0; counter < list.length-1; counter++) {
      let currentNumber = list[counter]
      let nextNumber = list[counter + 1]

      if(currentNumber > nextNumber) {
        list[counter] = nextNumber
        list[counter + 1] = currentNumber
        changeOccured = true;
      }
    }

    if(changeOccured === false) {
      changesMade = false
    }
  }

  return list;
}

console.log(bubbleSort(numbers))
