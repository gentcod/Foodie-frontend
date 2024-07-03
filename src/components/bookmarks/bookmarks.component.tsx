import { useDispatch, useSelector } from "react-redux";
import {
  selectAddBookmarksErrorResp,
  selectBookmarks,
  selectBookmarksErrorResponse,
  selectBookmarksIsLoading,
  selectRemoveBookmarksResp,
} from "../../store/bookmarks/bookmarks.selector";
import { getBoundaries } from "../../utils/helper/dom-locate.helper.utils";
import EntityBlocks from "../entity-blocks/entity-blocks.component";
import {
  BookmarkContainer,
  ContentContainer,
  Heading,
} from "./bookmarks.style";
import { useEffect } from "react";
import {
  selectCookieBookmarks,
  selectCookieBookmarksErrResp,
  selectRemoveCookieBookmarkResp,
  selectRemoveCookieBookmarksErrResp,
} from "../../store/cookie-bookmarks/cookie-bookmarks.selector";
import { selectUserIsLoggedIn } from "../../store/user/user.selector";
import {
  fetchBookmarksFailed,
  fetchBookmarksStart,
  refreshBookmarksStart,
  removeBookmarkFailed,
  removeBookmarkStart,
} from "../../store/bookmarks/bookmarks.action";
import {
  fetchCookieBookmarksFailed,
  fetchCookieBookmarksStart,
  refreshCookieBookmarksStart,
  removeCookieBookmarksFailed,
  removeCookieBookmarksStart,
} from "../../store/cookie-bookmarks/cookie-bookmarks.action";
import { notify } from "../../utils/helper/toastify.helper.utils";

const BookmarksDropdown = ({ elementRef, buttonRef }) => {
  const dispatch = useDispatch();
  const boundary = getBoundaries(buttonRef);
  const isLoggedIn = useSelector(selectUserIsLoggedIn);

  const bookmarks = useSelector(selectBookmarks);
  const cookieBookmarks = useSelector(selectCookieBookmarks);
  const bookmarksDetails = isLoggedIn ? bookmarks : cookieBookmarks;

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchBookmarksStart());
    }
    dispatch(fetchCookieBookmarksStart());
  }, [isLoggedIn, dispatch]);

  const bookmarkerrResp = useSelector(selectBookmarksErrorResponse);
  const cookiebookmarkerrResp = useSelector(selectCookieBookmarksErrResp);
  const errResp = isLoggedIn ? bookmarkerrResp : cookiebookmarkerrResp;

  const entityList = bookmarksDetails.recipes
    ? bookmarksDetails.recipes.map((data) => {
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
      isLoggedIn
        ? dispatch(fetchBookmarksFailed(null))
        : dispatch(fetchCookieBookmarksFailed(null));
    }
  }, [errResp, isLoggedIn, dispatch]);

  const handleDelete = (recipeId: number) => {
    if (isLoggedIn) {
      dispatch(removeBookmarkStart(recipeId));
      return;
    }
    dispatch(removeCookieBookmarksStart(recipeId));
    return;
  };

  const removeBookmarkResp = useSelector(selectRemoveBookmarksResp);
  const removeCookiebookmarkResp = useSelector(selectRemoveCookieBookmarkResp);
  const resp = isLoggedIn ? removeBookmarkResp : removeCookiebookmarkResp;

  useEffect(() => {
    if (resp) {
      notify(resp!, "success");
      if (isLoggedIn) {
        dispatch(refreshBookmarksStart());
      }
      dispatch(refreshCookieBookmarksStart());
    }
  }, [resp, isLoggedIn, dispatch]);

  const removeBookmarkRrrResp = useSelector(selectAddBookmarksErrorResp);
  const removeBookiebookmarkrrResp = useSelector(
    selectRemoveCookieBookmarksErrResp
  );
  const removeErrrResp = isLoggedIn
    ? removeBookmarkRrrResp
    : removeBookiebookmarkrrResp;

  useEffect(() => {
    if (removeErrrResp) {
      notify(removeErrrResp.message!, "error");
      if (isLoggedIn) {
        dispatch(removeBookmarkFailed(null));
        return;
      }
      dispatch(removeCookieBookmarksFailed(null));
    }
  }, [removeErrrResp, isLoggedIn, dispatch]);

  const bookmarksLoading = useSelector(selectBookmarksIsLoading);

  const deletable = {
    isdeletable: true,
    handleDeleteFunc: handleDelete,
  };

  return (
    <BookmarkContainer ref={elementRef} left={boundary?.left}>
      <ContentContainer>
        <Heading>Totoal Bookmarks: {bookmarksDetails.totalBookmarks}</Heading>
        {entityList.length > 0 ? (
          <EntityBlocks
            contentLoading={bookmarksLoading}
            entityType="recipe"
            entityList={entityList}
            deletable={deletable}
          />
        ) : (
          <></>
        )}
      </ContentContainer>
    </BookmarkContainer>
  );
};

export default BookmarksDropdown;
