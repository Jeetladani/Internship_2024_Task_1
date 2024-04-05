const display= document.getElementById("display"); 

function append(input){
    display.value +=input;
}

function cleardisplay(){
    display.value=null
}

function calculate(){
    try{
        display.value = eval(display.value)
    }
    catch(error)
    {
        display.value="Error";
    }
}