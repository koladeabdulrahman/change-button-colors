let buttons = document.getElementsByTagName('button')
let buttonColors = []
for(let i=0; i<buttons.length; i++){
    buttonColors.push(buttons[i].className)
}


function changeColors(choice){
    switch(choice.value){
        case 'random': random()
        break;
        case 'reset': reset()
        break;
        case 'red': red()
        break;
        case 'green': green()
        break;
        case 'blue': blue()
        break;
        case 'yellow': yellow()
        break;
    }
}


function random(){
    let randomIndex = Math.floor(Math.random() * 4)
    for(let i=0; i<buttons.length; i++){
         buttons[i].className = buttonColors[randomIndex]
    }
}

function reset(){
    for(let i=0; i<buttons.length; i++){
         buttons[i].className = buttonColors[i]
    }
}

function red(){
    for(let i=0; i<buttons.length; i++){
         buttons[i].className = 'btn btn-danger'
    }
}

function green(){
    for(let i=0; i<buttons.length; i++){
         buttons[i].className = 'btn btn-success'
    }
}

function blue(){
    for(let i=0; i<buttons.length; i++){
         buttons[i].className = 'btn btn-primary'
    }
}

function yellow(){
    for(let i=0; i<buttons.length; i++){
         buttons[i].className = 'btn btn-warning'
    }
}
