// DEFINE YOUR FUNCTION BELOW:

function returnDay(numOfDay){
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  if (numOfDay <= 0 || numOfDay > 7){
      return null;
  }
  return days[numOfDay-1];
}