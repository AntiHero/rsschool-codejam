function sumOfOther(arr) {
  let len = arr.length;
  let tmp = 0;
  return arr.map(function sum(item, index, array) {
    tmp = 0;
    for (let i = 0; i < len; i++) {
      if (i != index) {
        tmp += array[i];
      }
    }
    return item = tmp;
  });
}
