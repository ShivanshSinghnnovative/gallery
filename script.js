let x= document.getElementById('overlay');
let y= document.getElementById('center');
let currentIndex=0;

function openImage(imageSrc) {  
   currentIndex=imageSrc;
  document.getElementById('overlayImage').src = `${imageSrc}.jpg`;
  x.style.display = "block";
  y.style.display = "block";
  buttonWork();
}

function previousButton(){
    if(currentIndex>1){
        currentIndex--;
        displayImage(currentIndex);
    }
}


function nextButton(){
    if(currentIndex<16){
        currentIndex++;
        displayImage(currentIndex);
       
    }
    // if(currentIndex==="16"){
    //     document.getElementById('next').style.display="none";
    // }
    // else{
    //     document.getElementById('prev').style.display="block";
    // }
}
function displayImage(currentIndex) {  
    currentIndex ;
  document.getElementById('overlayImage').src = `${currentIndex}.jpg`;
  x.style.display = "block";
  y.style.display = "block";
  buttonWork() ;
}
function hideImage(){
    x.style.display = "none";
  y.style.display = "none";
}

function buttonWork(){
if(currentIndex=="1"){
    console.log("hd")
    document.getElementById('prev').style.visibility="hidden";
}else{
    console.log("hd")
    document.getElementById('prev').style.visibility="visible";
}
if(currentIndex=="16"){
    document.getElementById("next").style.visibility="hidden";
}
else{
    document.getElementById("next").style.visibility="visible";
}
}