
function sum(fromN, toN) {
  if (fromN === toN) {
    return fromN;
  } else {
    return toN + sum(fromN, toN - 1)
  }
}

module.exports = sum;
