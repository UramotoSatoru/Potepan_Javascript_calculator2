let display = document.getElementById("display");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let rest = document.getElementById("rest");

let hours = 0;
let minutes = 0;
let seconds = 0;
let mriseconds = 0;
let interval;
let watch_status = "stop";

function stopWatch(){
  
  mriseconds++;
  
  if(mriseconds / 10 == 1){
    seconds++;
    mriseconds = 0;
    
    if(seconds / 60 == 1){
      minutes++;
      seconds = 0;
      
      if(minutes / 60 == 1){
      hours++;
      minutes = 0;
      
      }
    }
  }

  display.innerHTML = hours + ":" + minutes +":" + seconds + ":" + mriseconds ;
}

start.addEventListener("click",function(){
   if(watch_status == "stop"){
   interval = setInterval(stopWatch,100);
    watch_status = "move";
   }
})

stop.addEventListener("click",function(){
  if(watch_status == "move"){
  clearInterval(interval);
  watch_status = "stop";
  }
})

rest.addEventListener("click",function() {
  clearInterval(interval);
  display.innerHTML = "0:0:0:0";
   hours = 0;
   minutes = 0;
   seconds = 0;
   mriseconds = 0;
   watch_status = "stop";
})

$(document).ready(function(){
  
  $("#start").click(function() {
    $(this).fadeTo("10000", 0.55); 
    $("#stop,#rest").fadeTo("10000", 1); 
  });
  
  $("#stop").click(function() {
    $(this).fadeTo("10000", 0.55); 
    $("#rest").fadeTo("10000", 1);
    $("#start").fadeTo("10000", 1); 
  });
  
  $("#rest").click(function() {
    $(this).fadeTo("10000", 1); 
    $("#start").fadeTo("10000", 1); 
    $("#stop").fadeTo("10000", 1); 
  });

  
  
  
  
  
});