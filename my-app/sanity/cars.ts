import { defineField, defineType } from "sanity";

export default defineType({
  name: "cars",
  title: "Cars Details",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    }),
    defineField({
      name: "model",
      title: "Model",
      type: "string",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "doors",
      title: "Doors",
      type: "number",
    }),
    defineField({
      name: "engine",
      title: "Engine",
      type: "string",
    }),
    defineField({
      name: "condition",
      title: "Condition",
      type: "string",
    }),
    defineField({
      name: "driven",
      title: "Driven",
      type: "string",
    }),
    defineField({
      name: "transmission",
      title: "Transmission",
      type: "string",
    }),
    defineField({
      name: "suspension",
      title: "Suspension",
      type: "string",
    }),
    defineField({
      name: "fuel",
      title: "Fuel Type",
      type: "string",
    }),
    defineField({
      name: "milage",
      title: "Milage",
      type: "string",
    }),
  ],
});
