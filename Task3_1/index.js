let name=prompt("Please enter your name");
let age=Number(prompt("Please enter your age"));
let Zinger=
{
name:'zinger',
price:'2.99',
category:'food',
available:true
}

let Burger= 
{
name:'burger',
price:'3.99',
category:'food',
available:true
}
let Shawarma=
{
name:'shawarma',
price:'1.99',
category:'food',
available:true
} 
let pizza=
{
    name:'pizza',
price:'5.99',
category:'food',
available:true
}
let Brosted=
{
name:'brosted',
price:'4.99',
category:'food',
available:true
}
let menu=[Shawarma,Zinger,Burger,Brosted,pizza]


function showMenu(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].name + "<br>"); 
  }
}
showMenu(menu);
    let selectedFood;
function simple(menu){
while(true){
    let x= prompt("Please enter number of food from menu 1 zinger 2 burger 3 shawarma 4 brosted 5  pizza"); 
  switch (x) {
  case "1":
selectedFood =menu[0];
  break;
  case "2":
selectedFood =menu[1];

    break;
 case "3":selectedFood =menu[2];

break;
    case "4":selectedFood =menu[3];

break;
    case "5":selectedFood =menu[4];

break;
  default: continue;
}
  break;

}
}
simple(menu);

let btn=document.querySelector(".bttn");
btn.onmouseover = function () {
    btn.style.color = "orange";
};

btn.onmouseout = function () {
    btn.style.color = "black";
};

btn.onclick = function () {
  document.write("Hello "+name+" Your Order is <br>");

  for (let key in selectedFood) {
    console.log(key + ": " + selectedFood[key]);
    document.write(key + ": " + selectedFood[key] + "<br>");
}
  
};