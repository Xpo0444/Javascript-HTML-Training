// initialising object 1
let x = {
name : "Shan",
age : 25
}
// initialising object 2
let y = {
name : "Subu",
age : 25
}

//defining function to check
let show;
if('name','cold' in x && 'name','cold' in y)
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