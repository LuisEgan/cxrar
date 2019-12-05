docReady(function() {
  AFRAME.registerComponent("log", {
    schema: { type: "string" },

    init: function() {
      var stringToLog = this.data;
      console.log(stringToLog);
    }
  });

  AFRAME.registerComponent("registerevents", {
    init: function() {
      var marker = this.el;
      var message = document.getElementById("message");

      marker.setAttribute("emitevents", "true");

      marker.addEventListener("markerFound", function() {
        message.style.display = "none";
        alert("found!");
      });

      marker.addEventListener("markerLost", function() {
        message.style.display = "block";
      });
    }
  });
});
