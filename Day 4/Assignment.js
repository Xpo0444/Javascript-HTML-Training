function progress(){
    let element = document.getElementById("progressBar");
    let width = 5;
    let id = setInterval(function (){
        if(width >= 100)
        {
            clearInterval(id);
        }
        else
        {
            width = width+1;
            element.style.width = width + "%";
            element.innerHTML = width * 1 + "%";
        }
    }, 10);
    
}