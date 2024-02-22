export type Recipe = {
   id: number,
   name: string,
   ingredients: string,
   description: string,
   origin: string,
   cookTime: string;
   imageSrc: string;
   category: string;
   features: boolean;
}

export type RecipeParams = {
   search?: string,
   sortBy: string,
   orderBy: number,
}

export type RecipeSearch = {
   id: number,
   name: string,
   imageSrc: string;
}