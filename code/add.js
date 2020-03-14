function sum(a, b) {
  if (a === 0) return b
  if (b === 0) return a

  const c = a ^ b

  return sum(c, (a & b) << 1)
}

console.log(sum(1, 2))
