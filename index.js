var temp=true;
function display(){
    var ref=1000;
    myTime=setTimeout('display_c()',ref);
}
function display_c(){
    // var xh=(new Date().getHours()==12)?12:(new Date().getHours()%12);
    var xh=new Date().getHours();
    var xm=new Date().getMinutes();
    var xs=new Date().getSeconds();
    var xa=(xh<12)? 'AM' : (xh>12) ? 'PM' : "PM";
    document.getElementById('show-H').innerHTML=(xh==12)?12:(new Date().getHours()%12);
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
        // case (a>=4 && a<12) && temp : {item5.innerHTML="<p>GOOD MORNING !!</p>";
        //                      texx.textContent=("LET'S HAVE SOME BREAKFAST !!");
        //                      item4.style.backgroundImage='url(./images/afternoon.png)';  }
        // break;
        // case (a>=12 && a<=17) && temp : {item5.innerHTML="<p>GOOD AFTERNOON !!</p>";
        //                        texx.textContent=("LET'S HAVE SOME LUNCH !!");
        //                        item4.style.backgroundImage='url(./images/home.png)';}
        // break;
        // case (a>=19 && a<=24 || a>=1 && a<=3) && temp : {item5.innerHTML="<p>GOOD NIGHT !!</p>";
        //                                         texx.textContent=("LET'S HAVE SOME DINNER !!");
        //                                         item4.style.backgroundImage='url(./images/night.png)'; }
        // break;
        // default : console.log("default");
        case valp :      {item5.innerHTML="<p>Party Time !!</p>";
                            texx.textContent=("It's Party Time !!");
                            item4.style.backgroundImage='url(./images/party.svg)';}
        break;
        case (valm==a) : {item5.innerHTML="<p>GOOD MORNING !!</p>";
                              texx.textContent=("LET'S HAVE SOME BREAKFAST !!");
                              item4.style.backgroundImage='url(./images/afternoon.png)';  }
        break;
        case (vala==a) : {item5.innerHTML="<p>GOOD AFTERNOON !!</p>";
                            texx.textContent=("LET'S HAVE SOME LUNCH !!");
                            item4.style.backgroundImage='url(./images/home.png)';}
        break;
        case (valn==a) : {item5.innerHTML="<p>GOOD NIGHT !!</p>";
                            texx.textContent=("LET'S HAVE SOME DINNER !!");
                            item4.style.backgroundImage='url(./images/night.png)'; }
        break;
        
        default :        {item5.innerHTML="<p>Free Time !!</p>";
                            texx.textContent=("It's Free Time !!");
                            item4.style.backgroundImage='url(./images/freetime.svg)'; }

    }

    display();
}




var mt=document.querySelector("#mtime");
var at=document.querySelector("#atime");
var nt=document.querySelector("#ntime");
var btnParty=document.querySelector("#btnParty");
var valm=-1,vala=-1,valn=-1,valp=false,temp=true;

btnParty.addEventListener('click',()=>{
    if(temp){
    valp=true;
    temp=false;
    document.querySelector("#btnParty").firstChild.nodeValue="Click Back To Normal Time !!"
    }
    else {
        valp=false;
        temp=true;
        document.querySelector("#btnParty").firstChild.nodeValue="PARTY TIME !"
    }
    // temp=false;
    // var item5=document.querySelector('.item5');
    // var texx=document.querySelector('.texx');
    // var item4=document.querySelector('.item4');
    // item5.innerHTML="<p>Party Time !!</p>";
    // texx.textContent=("It's Party Time !!");
    // item4.style.backgroundImage='url(./images/party.svg)';
})

mt.addEventListener('change',()=>{
    valm=mt.value;
    // var xht=new Date().getHours();
    // console.log("clicked morning"+valm+" "+xht);
    // if(valm==xht){
    //     temp=false;
    //     var item5=document.querySelector('.item5');
    //     var texx=document.querySelector('.texx');
    //     var item4=document.querySelector('.item4');
    //     item5.innerHTML="<p>GOOD MORNING !!</p>";
    //     texx.textContent=("LET'S HAVE SOME BREAKFAST !!");
    //     item4.style.backgroundImage='url(./images/afternoon.png)';
    // }
    // else temp=true;
})
at.addEventListener('change',()=>{
    vala=at.value;
    // var xht=new Date().getHours();
    // if(vala==xht){
    //     temp=false;
    //     var item5=document.querySelector('.item5');
    //     var texx=document.querySelector('.texx');
    //     var item4=document.querySelector('.item4');
    //     item5.innerHTML="<p>GOOD AFTERNOON !!</p>";
    //     texx.textContent=("LET'S HAVE SOME LUNCH !!");
    //     item4.style.backgroundImage='url(./images/home.png)';
    // }
})
nt.addEventListener('input',()=>{
    valn=nt.value;
    // var xht=new Date().getHours();
    // console.log("clicked night"+valn+" "+(valn+4)+" "+xht);
    // if(valn==xht){
    //     temp=false;
    //     var item5=document.querySelector('.item5');
    //     var texx=document.querySelector('.texx');
    //     var item4=document.querySelector('.item4');
    //     item5.innerHTML="<p>GOOD NIGHT !!</p>";
    //     texx.textContent=("LET'S HAVE SOME DINNER !!");
    //     item4.style.backgroundImage='url(./images/night.png)';
    // }
})



