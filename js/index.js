let container = document.getElementById('container');
let main = document.getElementById('main');
let button_easy = document.getElementById('paly');
let difficolta = document.getElementById('difficolta').value;


function blocco1(){
    let square = document.createElement('div');
    square.classList.add('square', 'square1');
    return square;
}

function blocco2(){
    let square = document.createElement('div');
    square.classList.add('square', 'square2');
    return square;
}

function blocco3(){
    let square = document.createElement('div');
    square.classList.add('square', 'square3');
    return square;
}


button_easy.addEventListener('click', function(){
    if(difficolta === '1'){
        for(let i = 0; i < 100; i++){
            let square = blocco1();
            square.innerText = i + 1;
            
            square.addEventListener('click', function(){
                this.classList.toggle('clicked');
                console.log(this)
                
            })
            container.append(square);
        }
        main.classList.add('d-none');
        main.classList.remove('d-none');
    }else if (difficolta === '2'){
        for(let ind = 0; ind < 81; ind++){
            let square = blocco2();
            square.innerText = ind + 1;
            
            square.addEventListener('click', function(){
                this.classList.toggle('clicked');
                console.log(this)
                
            })
            container.append(square);
        }
        main.classList.add('d-none');
        main.classList.remove('d-none');
    }else if (difficolta === '3'){
        for(let indice = 0; indice < 49; indice++){
            let square = blocco3();
            square.innerText = indice + 1;
            
            square.addEventListener('click', function(){
                this.classList.toggle('clicked');
                console.log(this)
                
            })
            container.append(square);
           
        }
        main.classList.add('d-none');
        main.classList.remove('d-none');
    }
})

console.log(difficolta === '3')