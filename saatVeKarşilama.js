let name1=prompt("Adınızı giriniz:")                          //get name 
let nameDOM=document.querySelector("#myName")                 //dom of name
nameDOM.innerHTML += name1                                    
const date=new Date();                                        //create new date object
const weekday = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];

let dateDay;                                                   //Day of date


const clockDOM=document.getElementById("myClock")
clockDOM.onload();                                               //run method, because it runs  method 
                                                                  //showTime() inside  the function
function showTime(){
    
    clockDOM.innerHTML=`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${weekday[date.getDay()]}`;
}


