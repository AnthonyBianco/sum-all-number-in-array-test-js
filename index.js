function sumItems(array) {
 return array.reduce((total, elementOfArray) => {
  if(Array.isArray(elementOfArray)){
    return total + sumItems(elementOfArray); 
  }
  else {
    return total + elementOfArray;
  }
}, 0);
};

console.log(sumItems([1,2,3,[3,3],3, 4]));

module.exports = sumItems;