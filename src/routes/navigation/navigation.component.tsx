import { Outlet } from "react-router-dom";
import { useRef, useState } from "react";
import { navItemsLeft, navItemsRight } from "../../dev-data/navigation-data";

import Search from "../../components/search/search.component";
import UserDropdown from "../../components/user-dropdown/user-dropdown.component";

import {
  Bookmarks,
  Container,
  Favorites,
  NavigationContainer,
  NavigationItem,
  NavigationItemIcon,
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
                  <NavigationItemIcon src={item.icon} />
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
                  <NavigationItemIcon src={item.icon} />
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
                    <NavigationItemIcon src={item.icon} />
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
                    <NavigationItemIcon src={item.icon} />
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
