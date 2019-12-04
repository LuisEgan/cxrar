function docReady(fn) {
  // see if DOM is already available
  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    // call on next available tick
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

docReady(function() {
  AFRAME.registerComponent("registerEvents", {
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
