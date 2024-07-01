type NavItemsLeft = {
   id: number;
   title: string;
   icon?: string;
}[]

type NavItemsRight = {
   id: number;
   title: string;
   icon: string;
}[]

export const navItemsLeft: NavItemsLeft = [
   {
      id: 0,
      title: 'recipes'
   },
   {
      id: 1,
      title: 'restaurants'
   },
   {
      id: 2,
      title: 'search',
      icon: 'icons/search.svg'
   },
]

export const navItemsRight: NavItemsRight = [
   {
      id: 3,
      title: 'user',
      icon: 'icons/chef.svg'
   },
   {
      id: 4,
      title: 'bookmarks',
      icon: 'icons/bookmark.svg'
   },
   {
      id: 5,
      title: 'favorites',
      icon: 'icons/favorite.svg'
   },
]