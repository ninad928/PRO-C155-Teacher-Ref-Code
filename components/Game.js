AFRAME.registerComponent("game-play", {
    schema: {
      elementId: { type: "string", default: "#ring1" },      
    },
    
    update: function() {
      this.isCollided(this.data.elementId);
    },
  
    isCollided: function(elemntId) {
      const element = document.querySelector(elemntId);
      element.addEventListener("collide", e => {
        if (elemntId.includes("#ring")) {
          element.setAttribute("visible", false);
          console.log("ring collision");
          
        }
        if(elementId.includes("#hurdle")){
          console.log("bird collision");
        }         
      });
    },
    
  });
  