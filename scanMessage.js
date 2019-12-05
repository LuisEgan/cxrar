docReady(function() {
  AFRAME.registerComponent("log", {
    schema: { type: "string" },

    init: function() {
      var stringToLog = this.data;
    }
  });

  AFRAME.registerComponent("registerevents", {
    init: function() {
      var marker = this.el;
      var message = document.getElementById("message");

      marker.setAttribute("emitevents", "true");

      marker.addEventListener("markerFound", function() {
        message.style.display = "none";
      });

      marker.addEventListener("markerLost", function() {
        message.style.display = "block";
      });
    }
  });
});
