var arraySize = 40;

var array = [];
for (var index = 0; index < arraySize; index++) {
  var randomNumber = Math.round(Math.random() * arraySize);

  array.push(randomNumber);
}

function swap(arr, firstIndex, secondIndex) {
  var temp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = temp;
}

function selectionSort(arr) {
  var len = arr.length;
  var min;

  for (var i = 0; i < len; i++) {

    min = i;

    for (var j = i + 1; j < len; j++) {
      if (arr[j] < min) {
        min = j;
      }
    }
    
    if (i !== min) {
      swap(arr, i, min);
    }
  }
  return arr;
}

console.log(selectionSort(array));
