/* eslint-disable linebreak-style */

/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable quotes */
import GoogleLogin from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/homepage.module.css";
import { selectSignedIn, setSignedIn, setUserData } from "../store/userSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const login = (res) => {
    dispatch(setSignedIn(true));
    dispatch(setUserData(res.profileObj));
  };
  const isSignedIn = useSelector(selectSignedIn);
  return (
    <div
      style={{ display: isSignedIn ? "none" : "" }}
      className={styles.wrapper}
    >
      {!isSignedIn ? (
        <div className={styles.inner}>
          <h2>&#x1F4DA;</h2>
          <h1>A Readers favourite place!</h1>
          <p>
            We provide high quality online resource for reading blogs. Just sign
            up and start reading some quality blogs.
          </p>
          <GoogleLogin
            clientId="144910150365-aepqpbughmnki4q43rnpe6ph5l9eh1qc.apps.googleusercontent.com"
            render={(renderProps) => (
              <button
                type="button"
                className={styles.button}
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                Login with Google
              </button>
            )}
            buttonText="Login"
            onSuccess={login}
            onFailure={login}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default HomePage;
