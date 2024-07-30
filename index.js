

var buttonArr = document.querySelectorAll(".drum");

var noOfButtons = buttonArr.length;

// FOR MAKING SOUND BY CLICKING ON HTML BUTTONS

for(var i=0 ; i<noOfButtons ; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        
        makeSound(this.innerHTML);

        buttonAnimation(this.innerHTML);
    });

    
}


// FOR MAKING SOUND THROUGH KEYPRESSES 

document.addEventListener("keypress",function(event){

    makeSound(event.key);

    buttonAnimation(event.key);

});

// FUNCTION WHICH PLAYS THE SOUNDS DEPENDING ON WHAY KEY

function makeSound(key){

    switch(key){
        
        case 'w' :
        var tom1 =  new Audio('sounds/tom-1.mp3');
        tom1.play();
        break;

        case 's' : 
        var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();        
        break;

        case 'a' :
        var tom3 =  new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;  

        case 'd' :
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;

        case 'j' : 
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
        break;

        case 'k' : 
        var crash = new Audio('sounds/crash.mp3');
        crash.play();
        break;

        case 'l' :
        var kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
        break;

        default : 
    }
}


function buttonAnimation(currentKey){

    var activeButton = document.querySelector("."+currentKey);           // each button has a class of the key associated with it in HTML, like 'w' , 's', so to tap into those buttons with parameter key, we gonna use the class '.w','.s' etc , for that we have to concat a '.' before the button contents for key parameter that we get.

    activeButton.classList.add("pressed");
    
    setTimeout(function(){activeButton.classList.remove("pressed");}, 100);

    
    
}

