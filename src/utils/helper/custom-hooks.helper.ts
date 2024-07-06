import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export interface ILocalStorageReturn {
   key: string;
   value?: string;
};

export const useLocalStorage = (key: string, defaulValue: string): ILocalStorageReturn => {
   const [value, setValue] = useState(() => {
      let currentValue;

      try {
         setValue(defaulValue);
      } catch (error) {
         console.log(error);
         return currentValue 
      }
   })

   return { key, value}
};

export const useLocationChange = () => {
   const location = useLocation();
   const currentLocation = location.pathname;

   useEffect(() => {
      console.log(currentLocation);
   }, [currentLocation])
};