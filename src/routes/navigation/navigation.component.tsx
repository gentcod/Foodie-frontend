import { 
  Outlet,
  useLocation,
} from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { navItemsLeft, navItemsRight } from "../../dev-data/navigation-data";
import { ReactComponent as SearchIcon } from '../../assets/search.svg';
import { ReactComponent as UserIcon } from '../../assets/chef.svg';
import { ReactComponent as BookmarkIcon } from '../../assets/bookmark.svg';
import { ReactComponent as FavoriteIcon } from '../../assets/favorite.svg';

import Search from "../../components/search/search.component";
import UserDropdown from "../../components/user-dropdown/user-dropdown.component";

import {
  Bookmarks,
  Container,
  Favorites,
  NavigationContainer,
  NavigationItem,
  NavigationItemsContainer,
  NavigationItemsContainerRight,
  SearchItem,
  UserName,
  UserProfile,
} from "./navigation.style";
import Header from "../../components/header/header.component";
import { useSelector } from "react-redux";
import {
  selectLoggedInUser,
  selectUserIsLoggedIn,
} from "../../store/user/user.selector";
import BookmarksDropdown from "../../components/bookmarks/bookmarks.component";
import FavoritesDropdown from "../../components/favorites/favorites.component";

const Navigation = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showBookmarks, setShowBookmarks] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);

  const location = useLocation();
  const currentLocation = location.pathname;

  useEffect(() => {
    setShowSearch(false);
    setShowProfile(false);
    setShowBookmarks(false);
    setShowFavorites(false);
  }, [currentLocation])

  const searchRef = useRef<HTMLDivElement | null>(null);
  const searchButtonRef = useRef<HTMLAnchorElement | null>(null);
  const profileRef = useRef<HTMLDivElement | null>(null);
  const profileButtonRef = useRef<HTMLAnchorElement | null>(null);
  const bookmakrsRef = useRef<HTMLDivElement | null>(null);
  const bookmakrsButtonRef = useRef<HTMLAnchorElement | null>(null);
  const favoritesRef = useRef<HTMLDivElement | null>(null);
  const favoritesButtonRef = useRef<HTMLAnchorElement | null>(null);

  const changeSearchState = () => {
    setShowSearch(!showSearch);
    setShowProfile(false);
    setShowBookmarks(false);
    setShowFavorites(false);
  };

  const changeProfileState = () => {
    setShowProfile(!showProfile);
    setShowSearch(false);
    setShowBookmarks(false);
    setShowFavorites(false);
  };

  const changeBookmarksState = () => {
    setShowBookmarks(!showBookmarks);
    setShowSearch(false);
    setShowProfile(false);
    setShowFavorites(false);
  };

  const changeFvaoritesState = () => {
    setShowFavorites(!showFavorites);
    setShowSearch(false);
    setShowProfile(false);
    setShowBookmarks(false);
  };
  
  useEffect(() => {
    const handleRemove = (e) => {  
      const refs = [
        searchButtonRef,
        profileButtonRef,
        bookmakrsButtonRef,
        favoritesButtonRef,
        searchRef,
        profileRef,
        bookmakrsRef,
        favoritesRef,
      ];
      
      if (refs.some(ref => ref.current && ref.current.contains(e.target as Node))) {
        return;
      }
  
      if (refs.some(ref => ref.current && !ref.current.contains(e.target as Node))) {
        setShowSearch(false);
        setShowProfile(false);
        setShowBookmarks(false);
        setShowFavorites(false);
        return;
      };
      
    };
  
    document.addEventListener('click', handleRemove);
    return () => {
      document.removeEventListener('click', handleRemove);
    };
  },[])

  const user = useSelector(selectLoggedInUser);
  const isLoggedIn = useSelector(selectUserIsLoggedIn);

  return (
    <>
      <Container>
        <Header />
        <NavigationContainer>
          <NavigationItemsContainer>
            {navItemsLeft.map((item) =>
              item.title === "search" ? (
                <SearchItem 
                  key={item.id} 
                  to={"#"} 
                  onClick={changeSearchState} 
                  ref={searchButtonRef}>
                     <span>{item.title}</span>
                  <SearchIcon />
                </SearchItem>
              ) : (
                <NavigationItem
                  key={item.id}
                  to={`/${item.title.replace(" ", "")}`}
                >
                  {item.title}
                </NavigationItem>
              )
            )}
          </NavigationItemsContainer>
          <NavigationItemsContainerRight>
            {user ? <UserName>Hello, {user.username}</UserName> : <></>}
            {navItemsRight.map((item) =>
              item.title === "user" ? 
              (
                <UserProfile
                  key={item.id}
                  to={"#"}
                  onClick={changeProfileState}
                  ref={profileButtonRef}
                >
                  <span>{item.title}</span>
                  <UserIcon/>
                </UserProfile>
              )
              : (
                item.title === "bookmarks" ? 
                (
                  <Bookmarks
                    key={item.id}
                    to={"#"}
                    onClick={changeBookmarksState}
                    ref={bookmakrsButtonRef}
                  >
                    <span>{item.title}</span>
                    <BookmarkIcon />
                  </Bookmarks>
                )
                :
                (
                  <Favorites
                    key={item.id}
                    to={"#"}
                    onClick={changeFvaoritesState}
                    ref={favoritesButtonRef}
                  >
                    <span>{item.title}</span>
                    <FavoriteIcon/>
                  </Favorites>
                )
              )
            )}
          </NavigationItemsContainerRight>
          {showProfile && (
            <UserDropdown
              name={user?.fullName}
              isLoggedIn={isLoggedIn}
              elementRef={profileRef}
              buttonRef={profileButtonRef}
            />
          )}
          {showSearch && <Search elementRef={searchRef} buttonRef={searchButtonRef}/>}
          {showBookmarks && <BookmarksDropdown elementRef={bookmakrsRef} buttonRef={bookmakrsButtonRef}/>}
          {showFavorites && <FavoritesDropdown elementRef={favoritesRef} buttonRef={favoritesButtonRef}/>}
        </NavigationContainer>
      </Container>
      <Outlet />
    </>
  );
};

export default Navigation;
