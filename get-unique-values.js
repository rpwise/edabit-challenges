function getUniqueValus(a) {
    if (a == null){
      throw "Parameter is null";
    }
    const uniqueValues = [...new Set(a)]
    return uniqueValues;
  }
  module.exports = getUniqueValus;