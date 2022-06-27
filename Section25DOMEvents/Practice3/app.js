// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const list = document.querySelector('#list');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const productInput = form.elements.product;
    const qtyInput = form.elements.qty;
    
    const li = document.createElement('li');   
    li.innerText = `${qtyInput.value} ${productInput.value}`; 
    
    list.appendChild(li);

    productInput.value = '';
    qtyInput.value = '';
});