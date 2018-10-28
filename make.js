function make(...args) {
  let arr = [];
  
  concatArgs(...args);

  /*inner function that will add arguments to outer arr variable*/
  function concatArgs(...args) {
    let tmp = Array.prototype.slice.call(args);

    if (typeof tmp[0] === 'function') {
      return arr.reduce(tmp[0]);
    }

    arr = arr.concat(tmp);
    return  concatArgs;
  }
  return concatArgs;
}

