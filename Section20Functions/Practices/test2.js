// DEFINE YOUR FUNCTION BELOW:

function lastElement(arr){
  const lastIndex = arr.length - 1
  if (lastIndex < 0){
      return null
  }
  return arr[lastIndex];
}