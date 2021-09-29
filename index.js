var temp=true;
function display(){
    var ref=1000;
    myTime=setTimeout('display_c()',ref);
}
function display_c(){
    var xh=new Date().getHours();
    var xm=new Date().getMinutes();
    var xs=new Date().getSeconds();
    var xa=(xh<12)? 'AM' : (xh>12) ? 'PM' : "PM";
    document.getElementById('show-H').innerHTML=xh;
    document.getElementById('show-M').innerHTML=xm;
    document.getElementById('show-S').innerHTML=xs;
    document.getElementById('show-A').innerHTML=xa;
    var a=xh;
    // if(morningAlarm>-1 && morningAlarm<=xh && morningAlarm+4>=xh){
    //     bolm=true;
    //     if(afternoonAlarm==morningAlarm || nightAlarm==morningAlarm){
    //         afternoonAlarm=-1;
    //         nightAlarm=-1;
    //     }
    // }
    // if(afternoonAlarm>-1 && afternoonAlarm<=xh && afternoonAlarm+4>=xh){
    //     bola=true;
    //     if(afternoonAlarm==morningAlarm || nightAlarm==afternoonAlarm){
    //         morningAlarm=-1;
    //         nightAlarm=-1;
    //     }
    // }
    // if(nightAlarm>-1 && nightAlarm<=xh && nightAlarm+4>=xh){
    //     boln=true;
    //     if(nightAlarm==morningAlarm || nightAlarm==afternoonAlarm){
    //         morningAlarm=-1;
    //         afternoonAlarm=-1;
    //     }
    // }
    var item5=document.querySelector('.item5');
    var texx=document.querySelector('.texx');
    var item4=document.querySelector('.item4');

    

    switch(true){
        case (a>=4 && a<12) && temp : {item5.innerHTML="<p>GOOD MORNING !!</p>";
                             texx.textContent=("LET'S HAVE SOME BREAKFAST !!");
                             item4.style.backgroundImage='url(./images/afternoon.png)';  }
        break;
        case (a>=12 && a<=17) && temp : {item5.innerHTML="<p>GOOD AFTERNOON !!</p>";
                               texx.textContent=("LET'S HAVE SOME LUNCH !!");
                               item4.style.backgroundImage='url(./images/home.png)';}
        break;
        case (a>=19 && a<=24 || a>=1 && a<=3) && temp : {item5.innerHTML="<p>GOOD NIGHT !!</p>";
                                                texx.textContent=("LET'S HAVE SOME DINNER !!");
                                                item4.style.backgroundImage='url(./images/night.png)'; }
        break;
        // default : console.log("default");
    }

    display();
}

// var morningAlarm=-1,afternoonAlarm=-1,nightAlarm=-1;
// var bolm=false;var bola=false;var boln=false;
// function morningVibes(){
//     var selected=document.querySelector('#mtime').value;
//     console.log(selected)
//     switch(selected){
//         case "4-8" : morningAlarm=4;
//         break;
//         case "9-13" : morningAlarm=9;
//         break;
//         case "14-18" : morningAlarm=14;
//         break;
//         case "19-23" : morningAlarm=19;
//         break;
//         case "24-24-1-3" : morningAlarm=24;
//         break;
//         default : morningAlarm=1;
//     }
//     console.log(morningAlarm);
// }

// function afternoonVibes(){
//     var selected=document.querySelector('#atime').value;
//     console.log(selected)
//     switch(selected){
//         case "4-8" : afternoonAlarm=4;
//         break;
//         case "9-13" : afternoonAlarm=9;
//         break;
//         case "14-18" : afternoonAlarm=14;
//         break;
//         case "19-23" : afternoonAlarm=19;
//         break;
//         case "24-24-1-3" : afternoonAlarm=24;
//         break;
//         default : afternoonAlarm=1;
//     }
//     console.log(afternoonAlarm);
// }
// function nightVibes(){
//     var selected=document.querySelector('#ntime').value;
//     console.log(selected)
//     switch(selected){
//         case "4-8" : nightAlarm=4;
//         break;
//         case "9-13" : nightAlarm=9;
//         break;
//         case "14-18" : nightAlarm=14;
//         break;
//         case "19-23" : nightAlarm=19;
//         break;
//         case "24-24-1-3" : nightAlarm=24;
//         break;
//         default : nightAlarm=1;
//     }
//     console.log(nightAlarm);
// }
var mt=document.querySelector("#mtime");
var at=document.querySelector("#atime");
var nt=document.querySelector("#ntime");

mt.addEventListener('change',()=>{
    var valm=mt.value;
    var xht=new Date().getHours();
    console.log("clicked morning"+valm+" "+xht);
    if(valm<=xht && valm+4>=xht){
        temp=false;
        var item5=document.querySelector('.item5');
        var texx=document.querySelector('.texx');
        var item4=document.querySelector('.item4');
        item5.innerHTML="<p>GOOD MORNING !!</p>";
        texx.textContent=("LET'S HAVE SOME BREAKFAST !!");
        item4.style.backgroundImage='url(./images/afternoon.png)';
    }
})
at.addEventListener('change',()=>{
    var vala=at.value;
    var xht=new Date().getHours();
    if(vala<=xht && vala+4>=xht){
        temp=false;
        var item5=document.querySelector('.item5');
        var texx=document.querySelector('.texx');
        var item4=document.querySelector('.item4');
        item5.innerHTML="<p>GOOD AFTERNOON !!</p>";
        texx.textContent=("LET'S HAVE SOME LUNCH !!");
        item4.style.backgroundImage='url(./images/home.png)';
    }
})
nt.addEventListener('change',()=>{
    var valn=nt.value;
    var xht=new Date().getHours();
    console.log("clicked night"+valn+" "+(valn+4)+" "+xht);
    if(valn<=xht && valn+4>=xht){
        temp=false;
        var item5=document.querySelector('.item5');
        var texx=document.querySelector('.texx');
        var item4=document.querySelector('.item4');
        item5.innerHTML="<p>GOOD NIGHT !!</p>";
        texx.textContent=("LET'S HAVE SOME DINNER !!");
        item4.style.backgroundImage='url(./images/night.png)';
    }
})

