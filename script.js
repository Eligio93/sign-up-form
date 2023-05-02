
// This replace the placeholder in case the input loose focus with no data
const emptyField=document.querySelectorAll("input").forEach(function(e){
    e.addEventListener("click", function(){
        let placeholder= e.placeholder;
        console.log(placeholder);
        e.setAttribute("placeholder", "");
        e.addEventListener("blur",function(){
            if(e.value===""){
                e.setAttribute("placeholder", placeholder);
            }
        })
    })
});
