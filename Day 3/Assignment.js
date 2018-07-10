// initialising object
let x = {
name : "Shan",
age : 25
}
//defining function to check
let show;
if('cold' in x)
{
show = function(){
    alert("yes");
};
}
else
{
show = function(){
alert("No");
};
}
//calling function
show();