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


console.log(flatten([1,[2,[3]]],1))
