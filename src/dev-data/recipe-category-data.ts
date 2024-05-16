type RecipeDataProps = {
   id: number; 
   name: string;
   description: string;
   imgSrc: string;
   link: string;
}[]

export const data: RecipeDataProps = [
   {
      id: 0,
      name: 'Foreign Recipes',
      description: 'A compilation of various recipes from different parts of the world',
      imgSrc: 'https://res.cloudinary.com/douvgvdla/image/upload/v1715859467/foreign_rbc9pc.jpg',
      link: '/recipes?category=foreign',
   },

   {
      id: 1,
      name: 'Pastry Recipes',
      description: 'A compilation of various pastries and bakes',
      imgSrc: 'https://res.cloudinary.com/douvgvdla/image/upload/v1715859510/pastries_yeaflu.jpg',
      link: '/recipes?category=pastry',
   },

   {
      id: 2,
      name: 'Vegetarian Recipes',
      description: 'A compilation of various vegetarian diets',
      imgSrc: 'https://res.cloudinary.com/douvgvdla/image/upload/v1715859520/vegetarian_u0xyqd.jpg',
      link: '/recipes?category=vegetarian',
   },

   {
      id: 3,
      name: 'Quick Recipes',
      description: 'A compilation of various easily made delicacies',
      imgSrc: 'https://res.cloudinary.com/douvgvdla/image/upload/v1715859522/tacos_clqsto.jpg',
      link: '/recipes?category=quick',
   },
   
   {
      id: 4,
      name: 'African Recipes',
      description: 'A compilation of various african Dishes',
      imgSrc: 'https://res.cloudinary.com/douvgvdla/image/upload/v1715859536/featured_nj8smb.jpg',
      link: '/recipes?category=african',
   },
]
