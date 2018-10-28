function sumOfOther(arr) {
  let len = arr.length;

  return arr.map(function sum(item, index, array) {
    item = 0;
    for (let i = 0; i < len; i++) {
      if (i != index) {
        item += array[i];
      }
    }
    return item;
  });
}

let arr = [2, 3, 4, 1];
console.log(sumOfOther(arr));
