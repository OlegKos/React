function slider_shift(event){
    var target=event.target,
    shift=target.getAttribute("data-shift"),
    active= document.getElementsByClassName("nav-link-selected")[0],
    wraper=document.getElementById("wraper");
    
    if(target.tagName=='LI'){
      active.classList.remove("nav-link-selected");    
      target.classList.add("nav-link-selected");
    }
    
    wraper.style.transform="translate("+shift+",0px)";    
}
window.onscroll = function(){ 
    var header = document.getElementById("header-menu")
    if((window.scrollY>0)&(window.innerWidth<1200)){
        header.style.backgroundColor="rgba(153,134,117,"+(window.scrollY/150)+")";
        header.style.position="fixed";
        header.style.boxShadow="0 3px 10px rgba(0, 0, 0, 0.35)";
    }
    else{
        header.style.backgroundColor="";
        header.style.position="";
        header.style.boxShadow="";        
    }
    
};
function ShowMenu() {   
    document.getElementById("hidden-menu").style.transform="translate(330px,0px)";
};


function CloseMenu() {
    document.getElementById("hidden-menu").style.transform="translate(-330px,0px)";
    
};



window.onload= function() {
    var slider=document.getElementById("slider-nav-list");
    
    /* event which scroll slides*/
    slider.addEventListener("click",slider_shift,false);
};


