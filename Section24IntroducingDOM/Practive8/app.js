// WRITE YOUR CODE IN HERE:

const divDom = document.querySelector("div");
for (let i = 0; i<100; i++){
    let buttonAppend = document.createElement("button");
    buttonAppend.innerText = "Hey!";
    divDom.appendChild(buttonAppend);
}