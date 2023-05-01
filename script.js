const emptyField=document.querySelectorAll("input").forEach(function(e){
    e.addEventListener("click", function(){
        e.setAttribute("placeholder", "");
    })
});
