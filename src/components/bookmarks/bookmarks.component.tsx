import { useDispatch, useSelector } from "react-redux";
import { selectBookmarks, selectBookmarksErrorResponse } from "../../store/bookmarks/bookmarks.selector";
import { getBoundaries } from "../../utils/helper/dom-locate.helper.utils";
import EntityBlocks from "../recipe-blocks/entity-blocks.component";
import {
  BookmarkContainer,
  ContentContainer,
  Heading,
} from "./bookmarks.style";
import { useEffect } from "react";
import { selectCookieBookmarks, selectCookieBookmarksErrResp } from "../../store/cookie-bookmarks/cookie-bookmarks.selector";
import { selectUserIsLoggedIn } from "../../store/user/user.selector";
import { fetchBookmarksFailed, fetchBookmarksStart } from "../../store/bookmarks/bookmarks.action";
import { fetchCookieBookmarksFailed, fetchCookieBookmarksStart } from "../../store/cookie-bookmarks/cookie-bookmarks.action";
import { notify } from "../../utils/helper/toastify.helper.utils";

const BookmarksDropdown = ({ elementRef, buttonRef }) => {
  const dispatch = useDispatch();
  const boundary = getBoundaries(buttonRef);
  const isLoggedIn = useSelector(selectUserIsLoggedIn);

  useEffect(() => {
    (isLoggedIn)
      ? dispatch(fetchBookmarksStart())
      : dispatch(fetchCookieBookmarksStart());
  }, [isLoggedIn, dispatch]);

  const bookmarks = useSelector(selectBookmarks);
  const cookieBookmarks = useSelector(selectCookieBookmarks);
  const bookmarksDetails = isLoggedIn ? bookmarks : cookieBookmarks;

  const bookmarkerrResp = useSelector(selectBookmarksErrorResponse);
  const cookiebookmarkerrResp = useSelector(selectCookieBookmarksErrResp);
  const errResp = isLoggedIn ? bookmarkerrResp : cookiebookmarkerrResp;


  const entityList = bookmarksDetails.recipes ? 
      bookmarksDetails.recipes.map((data) => {
        return {
          id: data.id,
          imageSrc: data.imageSrc,
          name: data.name,
        };
      })
      : [];
   
   useEffect(() => {
      if (errResp) {
         notify(errResp.message!, "error");
         isLoggedIn ?
            dispatch(fetchBookmarksFailed(null))
            : dispatch(fetchCookieBookmarksFailed(null));
      }
   }, [errResp, isLoggedIn, dispatch]);

  return (
    <BookmarkContainer ref={elementRef} left={boundary?.left}>
      <ContentContainer>
        <Heading>Totoal Bookmarks: {bookmarksDetails.totalBookmarks}</Heading>
        {entityList.length > 0 ? (
          <EntityBlocks entity="recipe" entityList={entityList} />
        ) : (
          <></>
        )}
      </ContentContainer>
    </BookmarkContainer>
  );
};

export default BookmarksDropdown;
