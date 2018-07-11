let squareDiv = document.getElementById("squareDiv"); // defining square division to move
let vertical_axis = document.getElementById("verticalDiv"); //defining the vertical axis   
let num =0; // initialising the num value so that it can move in range
let num1 = 360; //defining the point at max

//defining the cases for the interval
let interval = setInterval(()=> {
    //if value of num is in range of 0 to pi/2
    if(num <= Math.PI/2 * 100){
     num++;
     num1 += Math.sin(num/100);
     squareDiv.style.bottom = num1+ "px";
     squareDiv.style.left = (num/2) + "px";

}
// if value of num is in range of pi/2 to pi
else if (num > Math.PI/2 && num <= Math.PI*100)
{
    num++;
    num1 -= Math.sin(num/100);
    squareDiv.style.bottom = num1+ "px";
    squareDiv.style.left = (num/2) + "px";
}
// if value of num is in range of pi to 3/2 pi
else if (num>Math.PI*100 && num <= 1.5 * Math.PI*100)
{
    num++;
    num1 += Math.sin(num/100);
    squareDiv.style.bottom = num1+ "px";
    squareDiv.style.left = (num/2) + "px";
}
// if value of num is in range of 3/2 pi to 2 pi
else if(num > 1.5*Math>PI*100 && num <=2*Math.PI*100)
{
    num++;
    num1 -= Math.sin(num/100);
    squareDiv.style.bottom = num1+ "px";
    squareDiv.style.left = (num/2) + "px";
}
//if value of num is above 2 pi
else
{
    clearInterval(interval);
}
},16)