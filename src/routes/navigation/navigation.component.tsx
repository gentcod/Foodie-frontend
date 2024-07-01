import { Outlet } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { navItemsLeft, navItemsRight } from "../../dev-data/navigation-data";

import Search from "../../components/search/search.component";
import UserDropdown from "../../components/user-dropdown/user-dropdown.component";

import {
  Container,
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

const Navigation = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const searchRef = useRef<HTMLDivElement | null>(null);
  const profileRef = useRef<HTMLDivElement | null>(null);
  const searchButtonRef = useRef<HTMLAnchorElement | null>(null);
  const profileButtonRef = useRef<HTMLAnchorElement | null>(null);

  const changeSearchState = () => {
    setShowSearch(!showSearch);
    setShowProfile(false);
  };

  const changeProfileState = () => {
    setShowProfile(!showProfile);
    setShowSearch(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      searchRef.current &&
      !searchRef.current.contains(event.target as Node) &&
      profileRef.current &&
      !profileRef.current.contains(event.target as Node)
    ) {
      setShowSearch(false);
      setShowProfile(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

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
                  to={"#"} key={item.id} 
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
              item.title === "user" ? (
                <UserProfile
                  key={item.id}
                  to={"#"}
                  onClick={changeProfileState}
                  ref={profileButtonRef}
                >
                  <span>{item.title}</span>
                  <NavigationItemIcon src={item.icon} />
                </UserProfile>
              ) : (
                <NavigationItem key={item.id} to={`#`}>
                  <span>{item.title}</span>
                  <NavigationItemIcon src={item.icon} />
                </NavigationItem>
              )
            )}
          </NavigationItemsContainerRight>
          {showProfile && (
            <UserDropdown
              name={user?.name}
              imgSrc="icons/user-profile.svg"
              isLoggedIn={isLoggedIn}
              elementRef={profileRef}
              buttonRef={profileButtonRef}
            />
          )}
          {showSearch && <Search elementRef={searchRef} buttonRef={searchButtonRef}/>}
        </NavigationContainer>
      </Container>
      <Outlet />
    </>
  );
};

export default Navigation;
