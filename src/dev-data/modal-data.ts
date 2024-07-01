type ModListProp = {
   id: number;
   item: string;
   link: string;
 }[];
 
export const loggedInModList: ModListProp = [
   {
     id: 0,
     item: "profile",
     link: "",
   },
   {
     id: 2,
     item: "logout",
     link: "",
   },
 ];
 
export const loggedOutMmdList: ModListProp = [
    {
      id: 0,
      item: "log in",
      link: "/user/login",
    },
    {
      id: 2,
      item: "sign up",
      link: "/user/signup",
    },
  ];