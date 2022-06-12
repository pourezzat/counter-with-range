let valueDiv = document.getElementById('value')
let range = document.getElementById('range')

let value = 0;

function handleIncrease(){
    if(value != 100) value++;
    render()
}

function handleDecrease(){
    if(value != 0) value--;
    render()
}
function render(){
    valueDiv.innerHTML = value;
    range.value = value;
    range.style.backgroundSize = `${value}% 100%`
}
function handleRange(){
    value = range.value;
    render()
}
