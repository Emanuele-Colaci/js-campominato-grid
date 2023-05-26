let container = document.getElementById('container');
function blocco(){
    let square = document.createElement('div');
    square.classList.add('square');
    return square;
}

for(let i = 0; i < 100; i++){
    let square = blocco();
    square.innerText = i + 1;
    

    square.addEventListener('click', function(){
        this.classList.toggle('clicked');

    })
    container.append(square);
}