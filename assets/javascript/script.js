
function currentTime(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var amOrPm = 'AM';

    if(hours == 0){
        hours = 12;
    }
    
    if(hours > 12){
        hours = hours - 12;
        session = "PM";
    }
    
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
   
    
     var time = hours + ":" + minutes + ":" + seconds + " " + amOrPm;
        document.getElementById("display").innerText = time;
        document.getElementById("display").textContent = time;
    
    setTimeout(currentTime, 1000);
    
}

function currentTimeZone(){
    let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        document.getElementById("location").innerText = timeZone;
        document.getElementById("location").textContent = timeZone;
}

currentTime();
currentTimeZone();
        
function fullDate(){
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    document.getElementById("date").onclick = alert(date);
    
}

