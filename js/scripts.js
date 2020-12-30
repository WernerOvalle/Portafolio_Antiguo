$( document ).ready(function() {
  
  var play= 0

  $('audio').each(function(){
    reanudar = localStorage.getItem("musica");
    if(reanudar==null){
        this.currentTime= 0; // Reset time
    }else{
        this.currentTime= reanudar; // Reset time
    }
    if(localStorage.getItem("play")==1){
      $("#Play").text("ON");
      $("#Play").css("color","#4eb28f");
      $('audio').each(function(){
        this.play(); // Stop playing
       play=1; 
    }); 
  }
   
    
   
     
    
   
   }); 
   $("#Play").click(function() {
     if(play==1) {
     
       $("#Play").text("OFF");
       $("#Play").css("color","red");
       $('audio').each(function(){
           this.pause(); // Stop playing
         //  this.currentTime = 0; // Reset time
           play=0;
       
       }); 
     }else{
       $("#Play").text("ON");
       $("#Play").css("color","#4eb28f");
       $('audio').each(function(){
           this.play(); // Stop playing
         play=1
       });  
     }
   
   })
     $("a").click(function(e){
       
       $('audio').each(function(){
   
           tiempo=  this.currentTime; // Reset time
   
         }); 
         
       localStorage.setItem("musica", tiempo);
       localStorage.setItem("play", play);
     })
   
   });