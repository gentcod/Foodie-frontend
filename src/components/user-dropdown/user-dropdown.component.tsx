import { useDispatch } from "react-redux";
import {
  DropdownContainer,
  UserDetailsContainer,
  UserModList,
  UserModListItem,
  UserName,
  UserPicture,
} from "./user-dropdown.style";
import { loggedInModList, loggedOutMmdList } from "../../dev-data/modal-data";
import { logoutUser } from "../../store/user/user.action";
import { getBoundaries } from "../../utils/helper/dom-locate.helper.utils";
import { useLocation } from "react-router-dom";

type UserProp = {
  name: string;
  elementRef: any;
  isLoggedIn: boolean;
  buttonRef: any;
};

const UserDropdown = ({ name, isLoggedIn, elementRef, buttonRef }: UserProp) => {
  const dispatch = useDispatch();

  const location = useLocation();

  const handleLogout = () => {
    dispatch(logoutUser());
  };
  const boundary = getBoundaries(buttonRef);

  return (
    <DropdownContainer ref={elementRef} left={boundary?.left}>
      {isLoggedIn ? (
        <>
          <UserDetailsContainer>
            <UserPicture src={"icons/user-profile.svg"} />
            <UserName>{name}</UserName>
          </UserDetailsContainer>
          <UserModList>
            {loggedInModList.map((el) =>
              el.item !== "logout" ? (
                <UserModListItem to={el.link!} key={el.id}>
                  {el.item}
                </UserModListItem>
              ) : (
                <UserModListItem
                  to={el.link}
                  key={el.id}
                  onClick={handleLogout}
                >
                  {el.item}
                </UserModListItem>
              )
            )}
          </UserModList>
        </>
      ) : (
        <>
          <UserModList>
            {loggedOutMmdList.map((el) => (
              <UserModListItem to={`${el.link!}?redirect_url=${location.pathname}`} key={el.id}>
                {el.item}
              </UserModListItem>
            ))}
          </UserModList>
        </>
      )}
    </DropdownContainer>
  );
};

export default UserDropdown;