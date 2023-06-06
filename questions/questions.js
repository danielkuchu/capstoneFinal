(function(){

    "use strict";
    console.log("js running");

    //Instructions
    const rules = document.getElementById("instructions");
    const all = document.getElementById("all");

      //Question1, Response1
    const susan1 = document.getElementById("susan1");

     //Question2, Response2
    const q2 = document.getElementById("q2");
    const susan2 = document.getElementById("susan2");
    const response2 = document.getElementById("response2");

    //Question3, Response3
    const question3 = document.getElementById("q3");

    //Buttons
    const learnMore = document.getElementById("learnmore");
    const nextButton = document.getElementById("nextButton");
    const closeInstructions = document.getElementById("closeRules");
    const openInstructions = document.getElementById("openRules");

    //Allyson
    const radioContainers = q1.querySelectorAll(".radio");
    const submitButton = document.getElementById("submitButton");
    
    const q2ans = document.getElementById("q2_ans");
    const checkboxes = q2.querySelectorAll("input[type='checkbox']");
    const submitButton2 = document.getElementById("submitButton2")
    const q1ans = document.getElementById("q1_ans");
    const prog = document.getElementById("quizProg");

    openInstructions.addEventListener("click", function(){

        rules.className="show";
        all.className="show";

    });


    closeInstructions.addEventListener("click", function(){

        rules.className="hide";
        all.className="hide";

    });


    document.getElementById("closeOverlay1").addEventListener("click", function(){

        susan1.className="hide";


    })

    learnMore.addEventListener("click", function(){

        response2.className="hide";
        susan2.className= "show";

    });

    nextButton.addEventListener("click", function(){

        response2.className="hide";
        question3.className="show";


    });

    function updateSubmitButtonState() {
        if (q1.querySelector("input[value]:checked")) {
          submitButton.disabled = false;
          submitButton.classList.add("enabled");
        } else {
          submitButton.disabled = true;
          submitButton.classList.remove("enabled");
        }
      }
      
      radioContainers.forEach((radioContainer) => {
        const radioButtons = radioContainer.querySelectorAll("input[type='radio']");
        radioButtons.forEach((radioButton) => {
          radioButton.addEventListener("change", updateSubmitButtonState);
          if (radioButton.checked) {
            updateSubmitButtonState();
          }
        });
      });
      
      // Update the submit button state on form load
      updateSubmitButtonState();   
  
      document.getElementById("q1").addEventListener("submit", function(event) {
        event.preventDefault();
        q1.className = "hide";
        q1ans.className = "show";
    });

      document.getElementById("q1_ans").addEventListener("submit", function(event) {
    event.preventDefault();
    q1.className = "hide";
    q1ans.className = "hide";
    q2.className = "show";
});

})();