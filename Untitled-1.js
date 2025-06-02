let b=document.getElementById("bu");
let l=document.getElementById("lu");
let pp=document.getElementById("po");
let ii=document.getElementById("in");
let supp=document.getElementById("sup");
supp.style.display="none";

ii.addEventListener( "keydown",function(e){
    
   

if(e.key==="Enter"){
    if(ii.value.trim()==='')
    {

        pp.textContent="le champs est inaccessible";  
        pp.style.color="red";}
        else{
            pp.textContent="tache ajoutée!";  
            pp.style.color="green";
            supp.style.display="inline";
            
       
        let liv=document.createElement("li");
        let check=document.createElement("input");
        check.type="checkbox";
         
        liv.textContent=ii.value.trim();
        liv.appendChild(check);
        l.appendChild(liv);
        
  ii.value=' ';}
    }

})





b.addEventListener( "click",function(){
   if(ii.value.trim()==='')
    {

        pp.textContent="le champs est inaccessible";  
        pp.style.color="red";}
        else{
            pp.textContent="tache ajoutée!";  
            pp.style.color="green";
            supp.style.display="inline";
            
       
         let liv=document.createElement("li");
        let check=document.createElement("input");
        check.type="checkbox";
         
        liv.textContent=ii.value.trim();
        liv.appendChild(check);
        l.appendChild(liv);
        
  ii.value=' ';}
    }

    )
 supp.addEventListener("click", function() {
    let checkboxes = l.querySelectorAll("input[type='checkbox']:checked");
    
    if(checkboxes.length === 0) {
        pp.textContent = "Aucune tache selectionnée";
        pp.style.color = "orange";
        
    } else {
        checkboxes.forEach(function(checkbox) {
            checkbox.parentElement.remove();
           
        });
        
        pp.textContent = "Tache supprimée!";
        pp.style.color = "orange";
    }
});


    



    








