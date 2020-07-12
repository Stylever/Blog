function flatten(arr, depth) {
  const result = [];

  helper(arr, depth, result);

  return result;
}

function helper(arr, depth, result) {
  if (depth === 0) {
    result.push(...arr)
    return
  }

  for (const value of arr) {
    if (Array.isArray(value)) {
      helper(value, depth - 1, result);
    } else {
      result.push(value);
    }
  }
}

function flatDeep(arr, d = 1) {
  return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
               : arr.slice()
}

console.log(flatten([1,[2,[3]]],1))
console.log(flatten([1,[2,[3]]],2))
console.log(flatten([1,[2,[3]]],3))
