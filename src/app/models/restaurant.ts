import { Rating } from "../../app/models/ratings";
import { Bearing } from "../../app/models/bearing";

export type Restaurant = {
   id: number,
   name: string,
   imageSrc: string,
   location: string,
   geolocation: Bearing,
   rating: Rating,
}