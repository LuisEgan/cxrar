let eyeAnims;

docReady(function() {
  eyeAnims = document.getElementById("eyeanims");
});

// * Set the 3D Model transform
AFRAME.registerComponent("transform", {
  init: function() {
    const el = this.el;
    const object = el.object3D;

    const scale = 5;
    object.scale.set(scale, scale, scale);
  }
});

// * Handle reveal and blinking eye animations
AFRAME.registerComponent("eye", {
  init: function() {
    const marker = this.el;

    marker.addEventListener("markerFound", () => {
      eyeAnims.setAttribute(
        "animation-mixer",
        "clip: eyeReveal; duration: 5; loop: once"
      );
    });

    marker.addEventListener("markerLost", () => {});
  }
});
AFRAME.registerComponent("eyeanims", {
  init: function() {
    const el = this.el;

    el.addEventListener("animation-finished", () => {
      eyeAnims.setAttribute(
        "animation-mixer",
        "clip: eyeBlinking; loop: repeat"
      );
    });
  }
});
