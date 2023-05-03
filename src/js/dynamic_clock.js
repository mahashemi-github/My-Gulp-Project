const hour = document.querySelector('.hour');
const min = document.querySelector('.minute');
const sec = document.querySelector('.second');

function setClockTime(){
    const date = new Date();
    const hourA = date.getHours();

    if(hourA < 12) {
    var hourAngle = hourA/12 * 360 - 90 + (date.getMinutes()/12 * 6);
    } else {
    var hourAngle = (hourA - 12 )/12 * 360 - 90 + (date.getMinutes()/12 * 6);
    }

    const minAngle = date.getMinutes()/60 * 360 - 90;
    const secAngle = date.getSeconds()/60 * 360 - 90;
    
    hour.style.transform = `rotate(${hourAngle}deg)`; 
    min.style.transform = `rotate(${minAngle}deg)`; 
    sec.style.transform = `rotate(${secAngle}deg)`;
}

setInterval(setClockTime, 1000); 
setClockTime();   

//  digital clock --------------------------------------------

const time = document.querySelector('.time');

function setTime() {

    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    time.innerHTML = h + " : " + m + " : " + s; 

}

setInterval(setTime, 1000); 
setTime();

//  Calendar Date --------------------------------------------

let fulldate = document.querySelector(".datee");

function setDate() {

    const date = new Date();

    let year = date.getFullYear();
    
    let month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let monthname = month[date.getMonth()];
    
    let monthday  = date.getDate();
    
    let weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let weekdayname = weekday[date.getDay()];
    
    fulldate.innerHTML = weekdayname + " ," + monthday + " " + monthname + " " + year;
}

setDate();


