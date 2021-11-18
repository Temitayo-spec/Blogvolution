/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */
/* eslint-disable quotes */
import { useState } from "react";
import { GoogleLogout } from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSignedIn,
  selectUserData,
  setSignedIn,
  setUserData,
  setInput,
} from "../store/userSlice";
import styles from "../styles/header.module.css";

const Header = () => {
  const [inputValue, setInputValue] = useState("tech");
  const userData = useSelector(selectUserData);
  const isSignedIn = useSelector(selectSignedIn);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setInput(inputValue));
  };
  const logout = () => {
    dispatch(setSignedIn(false));
    dispatch(setUserData(null));
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h1>Blogvolution &#x1F4AC;</h1>
        </header>
        {isSignedIn ? (
          <div className={styles.search_input}>
            <input
              type="text"
              placeholder="Search for a blog"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="button" onClick={handleClick}>
              Search
            </button>
          </div>
        ) : null}
        {isSignedIn ? (
          <>
            <div className={styles.nav_user_data}>
              <img src={userData?.imageUrl} alt={userData?.name} />
              <h1 className={styles.signed_in}>
                Hi
                {' '}
                {userData?.givenName}
                !
              </h1>
              <GoogleLogout
                clientId="144910150365-aepqpbughmnki4q43rnpe6ph5l9eh1qc.apps.googleusercontent.com"
                render={(renderProps) => (
                  <button
                    type="button"
                    className={styles.logout_btn}
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    Logout...
                  </button>
                )}
                buttonText="Logout"
                onLogoutSuccess={logout}
              />
            </div>
          </>
        ) : (
          <h3 className={styles.not_available}>
            {" "}
            &#128543; user not available
          </h3>
        )}
      </div>
    </div>
  );
};

export default Header;
