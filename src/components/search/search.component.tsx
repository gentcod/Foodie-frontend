import { useState } from 'react';
import SearchPreview from '../search-preview/search-preview.component';
import { SearchBar, SearchBarContainer } from './search.style';
import { getBoundaries } from '../../utils/helper/dom-locate.helper.utils';

const Search = ({elementRef, buttonRef}) => {
   const [searchString, setSearchString] = useState("");
   const boundary = getBoundaries(buttonRef);

   const searchHandler = (event: React.FormEvent<HTMLInputElement>) => {
      event.preventDefault()
      setSearchString(`?search=${event.currentTarget.value}`)
   }

   return (
         <SearchBarContainer ref={elementRef} left={boundary?.left}>
            <SearchBar placeholder='Enter keyword' onChange={searchHandler} name='search'/>
            <SearchPreview searchString={searchString}/>
         </SearchBarContainer>
   )
}

export default Search;