type RecipeItemProp = {
   id: number;
   name: string;
   imgSrc: string;
};

type RecipeCategoryProp = {
   id: number;
   heading: string;
   contents: RecipeItemProp[];
}[];

export const categoryData: RecipeCategoryProp = [
   {
      id: 0,
      heading: "Top Recipe Categories",
      contents: [
         {
            id: 0,
            name: "Grills",
            imgSrc: "https://res.cloudinary.com/douvgvdla/image/upload/v1715859504/grills-cat_gn5uw5.jpg",
         },

         {
            id: 1,
            name: "Vegetables",
            imgSrc: "https://res.cloudinary.com/douvgvdla/image/upload/v1715859531/vegetables-cat_fycgjq.jpg",
         },

         {
            id: 2,
            name: "Rice",
            imgSrc: "https://res.cloudinary.com/douvgvdla/image/upload/v1715859534/rice-cat_rj3p9k.jpg",
         },
      ],
   },
];