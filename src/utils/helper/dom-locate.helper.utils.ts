/**
 * 
 * @param elementRef is a reference to an element<HTMLElement> B. 
 *    The reference is derived by using useRef Hook. 
 *    The reference is attached to the element B and parsed as a prop to element A which calls the getBoundaries(element<A>Ref).
 * @returns The DOM boundaries of the reference element.
 */
export const getBoundaries = (elementRef) => {
   if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect();
      return {
         left: rect.left + window.scrollX,
      };
   }
};