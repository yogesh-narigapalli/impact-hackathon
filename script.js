var signal1="Red";
    var signal2="Green";
    var signal3="Red";
    var signal4="Green";

var aa=document.getElementById("signal1");
var ba=document.getElementById("signal2");
var ca=document.getElementById("signal3");
var da=document.getElementById("signal4");


aa.innerHTML=signal1;
    ba.innerHTML=signal2;
    ca.innerHTML=signal3;
    da.innerHTML=signal4;
function button(){
    var dist=document.getElementById("ambuDist").value;
var lane=document.getElementById("sigLane").value;
    
    var ra=document.getElementById("print");
    
    ra.innerHTML=dist;
    console.log(dist);
    

    if(dist<=100){
        ra.innerHTML="Ambulance is under 100 mts";
    }else {
        ra.innerHTML="Ambulance is not under 100 mts";

    }
    if(lane==1&&dist<=100){
        aa.innerHTML="Green"
    }
    if(lane==2&&dist<=100){
        ba.innerHTML="Green"
    }
    if(lane==3&&dist<=100){
        ca.innerHTML="Green"
    }
    if(lane==4&&dist<=100){
        da.innerHTML="Green"
    }


}