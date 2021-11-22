
    var i = 0;
    setInterval(() => {
        var slide = document.getElementById("slide")
        var b = i++
if (b===3) {
    slide.src="photos/slide2.jpg"
}
 else if (b===3) {
    slide.src="photos/slide3.jpg"
}
 else if (b===6) {
    slide.src="photos/slide4.jpg"
 
}
 else if (b===9) {
    slide.src="photos/slide5.jpg"
}
 else if (b===12) {
    slide.src="photos/slide6.jpg"
}
 else if (b===15) {
    slide.src="photos/slide1.jpg";
    i="";
}
    

  
}, 1000);



setInterval(() => {
    var time = new Date ();
    var sec = time.getSeconds();
    var minute = time.getMinutes();
    var hour = time.getHours();
    var sec1 = document.getElementById("time3");
    var min1 = document.getElementById("time2");
    var hour1 =document.getElementById("time1");
    sec1.innerHTML = sec;
    min1.innerHTML = minute;
    hour1.innerHTML = hour;

    var secA = document.getElementById("timeA");
    var minB = document.getElementById("timeB");
    var hourC =document.getElementById("timeC");
    secA.innerHTML = sec;
    minB.innerHTML = minute;
    hourC.innerHTML = hour;
 
    
    
}, 1000);









