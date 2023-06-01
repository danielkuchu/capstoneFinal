(function(){
    
const submit = document.getElementsByClassName("submit");
const q1 = document.querySelector("#q1");
const q2 = document.querySelector("#q2");

submit.addEventListener("click", function(){

q1.className= "hide";
q2.className="show"

});

})();