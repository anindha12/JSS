

function showTime(){
    var date = new Date();
    var h = date.getHours(); 
    var m = date.getMinutes(); 
    var s = date.getSeconds(); 
    var session = "AM";

    if(h == 0){ h = 12; }
    if(h > 12){ h = h - 12; session = "PM"; }
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    var time = h + ":" + m + ":" + s + " " + session;
    
    
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    var dayName = days[date.getDay()];
    var monthName = months[date.getMonth()];
    var dayOfMonth = date.getDate();
    var year = date.getFullYear();
    
    var fullDate = dayName + ", " + monthName + " " + dayOfMonth + ", " + year;
    

    document.getElementById("timeDisplay").innerText = time;
    document.getElementById("dateDisplay").innerText = fullDate;


    setTimeout(showTime, 1000);
}

showTime();
