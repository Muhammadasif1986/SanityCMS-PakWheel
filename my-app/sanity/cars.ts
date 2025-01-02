import { describe } from "node:test";

export default {
      name: "cars",
      title: "Cars Details",
      type: "document",
      fields: [
        { name: "name", title: "Name", type: "string" },
        { name: "slug", title: "Slug", type: "slug", options: { source: "name", maxLength: 96 } },
        { name: "model", title: "Model", type: "string" },
        { name: "price", title: "Price", type: "number" },
        { name: "image", title: "Image", type: "image", options: { hotspot: true } },
        {name:"doors", title:"Doors", type:"number" },
        {name:"engine", title:"Engine", type:"string" },
        {name:"condition", title:"Condition", type:"string" },
        {name:"driven", title:"Driven", type:"string" },
        {name:"transmission", title:"Transmission", type:"string" },
        {name:"suspension", title:"Suspension", type:"string" },
        {name:"fuel", title:"Fuel Type", type:"string" },
        {name:"milage", title:"Milage", type:"string" },
      ],
    };