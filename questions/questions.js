(function(){

    "use strict";
    console.log("js running");

    //Instructions
    const rules = document.getElementById("instructions");
    const all = document.getElementById("all");

      //Question1, Response1
    const susan1 = document.getElementById("susan1");

     //Question2, Response2
    const susan2 = document.getElementById("susan2");
    const response2 = document.getElementById("response2");

    //Question3, Response3
    const question3 = document.getElementById("q3");

    //Buttons
    const learnMore = document.getElementById("learnmore");
    const nextButton = document.getElementById("nextButton");
    const closeInstructions = document.getElementById("closeRules");
    const openInstructions = document.getElementById("openRules");

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


    })
    ;

})();