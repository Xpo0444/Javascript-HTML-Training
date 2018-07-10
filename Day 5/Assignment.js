let squareDiv = document.getElementById("squareDiv");
let vertical_axis = document.getElementById("verticalDiv");
let num =0;
let num1 = 720;
let interval = setInterval(()=> {
    if(num <= Math.PI/2 * 100){
     num++;
     num1 += Math.sin(num/100);
     squareDiv.style.bottom = num1+ "px";
     squareDiv.style.left = (num/2) + "px";

}
else if (num > Math.PI/2 && num <= Math.PI*100)
{
    num++;
    num1 -= Math.sin(num/100);
    squareDiv.style.bottom = num1+ "px";
    squareDiv.style.left = (num/2) + "px";
}
else if (num>Math.PI*100 && num <= 1.5 * Math.PI*100)
{
    num++;
    num1 += Math.sin(num/100);
    squareDiv.style.bottom = num1+ "px";
    squareDiv.style.left = (num/2) + "px";
}
else if(num > 1.5*Math>PI*100 && num <=2*Math.PI*100)
{
    num++;
    num1 -= Math.sin(num/100);
    squareDiv.style.bottom = num1+ "px";
    squareDiv.style.left = (num/2) + "px";
}
else
{
    clearInterval(interval);
}
},16)