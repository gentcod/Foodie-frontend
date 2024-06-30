import { Embedded } from "./embedded";

export interface Bookmarks {
   id: number;
   userId: string;
   totalBookmarks: number;
   recipes: Embedded[]
}