// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("data/name.txt", 
            function (request) {
              var name = request.responseText;

              document.querySelector("#content")
                .innerHTML = "<h2>Hello " + name + "!</h2>";
            });

        /** if you do this synchronous way, you will not have name from server
         *   document.querySelector("#content")
                .innerHTML = "<h2>Hello " + name + "!</h2>";
         * **/
      });
  }
);
