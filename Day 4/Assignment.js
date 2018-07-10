// function to show progress
function progress(){
    let element = document.getElementById("progressBar");
    let width = 5; //starting percentage
    let id = setInterval(function (){
        if(width >= 100)
        {
            clearInterval(id);  //when reaches 100, halt
        }
        else
        {
            width = width+1;    //increase percentage by 1 everytime.
            element.style.width = width + "%";
            element.innerHTML = width * 1 + "%";
        }
    }, 10);
    
}