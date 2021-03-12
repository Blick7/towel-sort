
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let arr = [];
  let count = 0;
  if (!Array.isArray(matrix) || matrix.length === 0)
    return arr;
  else {
    matrix.forEach(item => {
      if (count % 2 === 0) {
        item.map(i => arr.push(i));
        count++;
      }
      else {
        item.reverse().map(i => arr.push(i));
        count++;
      }
      //console.log(item)
    })
  }
  return arr;
}

console.log(module.exports([
  [1, 2],
  [3, 4],
]));