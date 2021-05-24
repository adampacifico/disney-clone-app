import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { auth, provider } from "../firebase";

// redux
// useDispatch - allow to dispatch actions to redux store
//  useSelector - allow to retrieve data from store
import { useDispatch, useSelector } from "react-redux";

import {
  selectUserEmail,
  selectUserPhoto,
  selectUsername,
  setUserLoginDetails,
  setSignOutState,
} from "../redux/features/userSlice";

const Header = () => {
  const [isClick, setIsClick] = useState(false)

  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUsername);
  const userEmail = useSelector(selectUserEmail);
  const userPhoto = useSelector(selectUserPhoto);

  const handleAuth = () => {
    if (!userName) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error);
        });
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          history.push("/");
        })
        .catch((e) => {
          console.log(e.message);
        });
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        history.push("/home");
      }
    });
  }, [userName]);

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  const confirmMsg = () => {
    const ver = window.confirm("Are you sure you want to log out?");
    if (ver) {
      handleAuth();
    } else return;
  };
  return (
    <>
      <Nav>
        <Logo>
          <img src="/images/logo.svg" alt="" />
        </Logo>
        {!userName ? (
          <BtnLogin onClick={handleAuth}>LOGIN</BtnLogin>
        ) : (
          <>
            <Menu>
              <Link to="/home">
                <i className=" fa fa-home"></i>
                <span>HOME</span>
              </Link>
              <Link to="/home">
                <i className=" fa fa-search"></i>
                <span>SEARCH</span>
              </Link>
              <Link to="/home">
                <i className=" fa fa-plus"></i>
                <span>WATCHLIST</span>
              </Link>
              <Link to="/home">
                <i className=" fa fa-star"></i>
                <span>ORIGINALS</span>
              </Link>
              <Link to="/home">
                <i className=" fa fa-film"></i>
                <span>MOVIES</span>
              </Link>
              <Link to="/home">
                <i className=" fa fa-tv"></i>
                <span>SERIES</span>
              </Link>
            </Menu>
            <SignOut>
              <Name>
                Hi,
                {" " + userName.substr(0, userName.indexOf(" "))}
              </Name>
              <UserImage src={userPhoto} alt="" onClick={()=> {setIsClick(!isClick)}} />
                {isClick && <DropDown onClick={confirmMsg}>Sign Out</DropDown>}
            </SignOut>
          </>
        )}
      </Nav>
    </>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  background-color: #090b13;
  align-items: center;
  z-index: 100000;
`;
const Logo = styled.a`
  width: 90px;
  max-height: 70px;

  &:hover {
    cursor: pointer;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  justify-content: flex-end;
  margin-right: auto;
  margin-left: 40px;

  a {
    margin-right: 20px;
    font-size: 0.8rem;
    letter-spacing: 1.5px;

    i {
      margin-right: 8px;
    }
    span {
      position: relative;

      &:after {
        content: "";
        background-color: white;
        height: 2px;
        position: absolute;
        bottom: -8px;
        right: 0;
        left: 0;
        width: 0;
        opacity: 0;
        transition: all 0.4s ease-in-out;
      }
    }

    &:hover {
      span:after {
        opacity: 1;
        width: 100%;
      }
    }
  }

  @media (max-width: 820px) {
    display: none;
  }
`;

const BtnLogin = styled.a`
  letter-spacing: 1.5px;
  padding: 8px 15px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    font-weight: 700;
  }
`;

const DropDown = styled.div`
  position: absolute;
  bottom: -50px;
  left: 0;
  letter-spacing: 1.5px;
  border-radius: 5px;
  width: 100%;
  right: 0;
  padding: 8px 0;
  background-color: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.4);
`;

const UserImage = styled.img`
  object-fit: contain;
  height: 50px;
  border-radius: 50%;
`;

const SignOut = styled.div`
  position: relative;
  text-align: center;
  cursor: pointer;
  width: fit-content;
  display: inline-flex;
  align-items: center;
`;

const Name = styled.p`
  letter-spacing: 1.5px;
  font-size: 1rem;
  margin-right: 10px;
`;

export default Header;
