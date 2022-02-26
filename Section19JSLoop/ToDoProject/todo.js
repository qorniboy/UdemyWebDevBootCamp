let input = prompt("What are you gonna do?");
let todos = ["Study", "Study Again", "Study Again, Again"]
while(input !== "quit" && input !=="q"){

  if (input === "new" || input === "n"){
    newtodo = prompt("Alright, what is the new to do?");
    todos.push(newtodo);
    console.log(`${newtodo} Have been added to todos list`);
  }

  else if (input === "delete" || input === "d"){
    let indexToRemove = -1;
    while (indexToRemove < 0) {
      indexToRemove = prompt("Alright, what is to do to remove? (input number under 0 for listing)");
      if (indexToRemove < 0){
        for (let i = 0; i < todos.length; i++){
          console.log(`${i}: ${todos[i]}`);
        }
      }
    }
    todos.splice(indexToRemove,1);
    console.log(`${indexToRemove} have been removed`);
  }

  else if (input === "list" || input === "l"){
    console.log("*****");
    for (let i = 0; i < todos.length; i++){
      console.log(`${i}: ${todos[i]}`);
    }
    console.log("*****");

  }

  input = prompt("What are you gonna do?");
}

console.log("*****");
console.log("JS QUIT");
console.log("*****");