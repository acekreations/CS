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

function insertionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      var index2 = j - 1;
      swap(arr, j, index2);
      j--;
    }
  }
  return arr;
}
