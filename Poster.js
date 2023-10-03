AFRAME.registerComponent("tour", {
    init: function () {
      this.placesContainer = this.el;
      this.createCards();
      
    },
  
    createCards: function () {
      console.log("createcardss")
      const thumbNailsRef = [
        {
          id: "superman",
          title: "Superman",
          url: "superman.png",
        },
        {
          id: "spiderman",
          title: "Spiderman",
          url: "spider.png",
        },
  
        {
          id: "aero",
          title: "Aero",
          url: "Aero_Vol_1.jpg",
        },
        {
          id: "outer-space",
          title: "Outer Space",
          url: "download.jpg",
        },
      ];
      let prevoiusXPosition = -60;
  
      for (var item of thumbNailsRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        // Border Element
        const borderEl = this.createBorder(position, item.id)
        
        // Thumbnail Element
        const thumbnail = this.createThumbnail(item)
        borderEl.appendChild(thumbnail);
        console.log("sucess1")
        // Title Text Element
        const titleE1 = this.createTitleE1(position, item)
        borderEl.appendChild(titleE1)
  
        
        this.placesContainer.appendChild(borderEl);
        console.log("sucess")
      }
    },
    createBorder: function (position ,id) {
      console.log("createborder")
      const entityEl = document.createElement("a-entity")
      entityEl.setAttribute("id",id)
      entityEl.setAttribute("visible",true)
      entityEl.setAttribute("geometery", {
        primitive: "square",
        length: 9,
        height: 10,
      })
      entityEl.setAttribute("material", {
        color:"#0077CC",
        opacity: 1,
      });
  
      return entityEl;
    },
    
    createThumbnail: function (item) {
      console.log("createtumbnbail")
      const entityEl = document.createElement("a-entity")
      entityEl.setAttribute("visible",true)
      entityEl.setAttribute("geometery", {
        primitive: "square",
        length: 8,
        height: 9,
      })
      entityEl.setAttribute("material", {src: item.url});
  
      return entityEl;
  
    },
    createTitleE1: function (position, item) {
      const entityEl = document.createElement("a-entity")
      entityEl.setAttribute("text",{
        align:"center",
        width: 70 ,
        color: "#eg5100",
        value: item.title
      });
      const elPosition = position;
      elPosition.y -= 20;
      entityEl.setAttribute("position", elPosition);
      entityEl.setAttribute("visible",true);
      return entityEl;
  
  
    }
    
  });
  