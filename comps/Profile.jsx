/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable quotes */
/* eslint-disable arrow-body-style */
import { useSelector } from "react-redux";
import { selectSection, selectUserData } from "../store/userSlice";
import styles from "../styles/profile.module.css";

const Profile = () => {
  const section = useSelector(selectSection);
  const userData = useSelector(selectUserData);

  if (section === true) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <img src={userData?.imageUrl} alt="" />
          <h1>Fullname: {userData?.name}</h1>
          <p>Email Address: {userData?.email}</p>
        </div>
      </div>
    );
  }
  return null;
};

export default Profile;
