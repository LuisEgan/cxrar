docReady(function() {
  // * Show / Hide Scan message
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

  // * Set the 3D Model transform
  AFRAME.registerComponent("transform", {
    init: function() {
      const el = this.el;
      console.log(el.object3D);

      el.object3D.scale.set(5, 5, 5);

      el.object3D.rotation.x = THREE.Math.degToRad(90);
      el.object3D.rotation.z = THREE.Math.degToRad(180);

      
    }
  });
});
