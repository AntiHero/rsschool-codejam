function recursion(tree) {
  let arr = [];
  arr.push([tree.value]);

  function innerRecursion(tree) {
    arr.push([tree.value]);
    arr.push([tree.left.value, tree.right.value]);
    return 0;
  }

  for (key in tree) {
    if (typeof tree[key] === 'object') {
      innerRecursion(tree[key]);
    }
  }
  let res = [];
  res.push(arr[0]);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] != undefined && arr[i + 3] != undefined) {
      res.push(arr[i + 1].concat(arr[i + 3]));
    }
  }
    return res;
  }



