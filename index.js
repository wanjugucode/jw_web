var i=0;
var time =6000;
var images=[];
  images[0]='newimages/Capture 1.PNG';
  images[1]='newimages/Capture 2.jpg';
  images[2]='newimages/Capture 3.jpg';
  images[3]='newimages/Capture 5.jpg';
  function imageSlide(){
      document.slide.src=images[i]
 
      if (i <images.length -1){
        i++
      }
    
      else{
          i=0;
      } 
      setTimeout("imageSlide()",time );

  }

  window.onload=imageSlide;