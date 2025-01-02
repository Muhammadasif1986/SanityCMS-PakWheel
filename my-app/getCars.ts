import { client } from "@/sanity/lib/client";
interface Car {
      name: string;
      slug: string;
      model: string;
      price: string;
      image: any;
      doors: number;
      engine: string;
      condition: string;
      driven: string;
      transmission: string;
      suspension: string;
      fuel: string;
      milage: string;
    }
    
    const getCars = async (): Promise<Car[]> => {
      try {
        const queryCar =`*[_type == "cars"]{
          name,
          "slug": slug.current,
          model,
          price,
          image,
          doors,
          engine,
          condition, 
          driven,
          transmission,
          suspension,
          fuel,
          milage
        }`;
      
        const Cars: Car[] = await client.fetch(queryCar);
        return Cars;
      } catch (error) {
        console.error("Error fetching cars:", error);
        return [];
      }
    };
    export default getCars;