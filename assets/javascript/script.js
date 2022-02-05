function currentTime(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var amOrPm = 'AM';
    
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
   
     if (hours == 0){
        hours = 12;
        amOrPm = 'AM';
    }
      if (hours > 12){
        hours = hours - 12;
        amOrPm = 'PM';
  
     var time = hours + ":" + minutes + ":" + seconds + " " + amOrPm;
        document.getElementById("display").innerText = time;
        document.getElementById("display").textContent = time;
    
    setTimeout(currentTime, 200);
    
}}

currentTime();