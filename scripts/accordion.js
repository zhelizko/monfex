function onAccordionClickhandler(event){    
    let d  =  document.querySelector(".accordion .active");
    if(d){
        d.classList.remove("active");
    } 
     event.target.nextSibling.nextSibling.classList.toggle('active'); 
    
    
 }