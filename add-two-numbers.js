function sum(a, b) {
  if (a == null || b == null){
    throw "Parameter is null";
  }
  return a + b;
}
module.exports = sum;