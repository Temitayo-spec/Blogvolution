/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable quotes */
import { useSelector } from "react-redux";
import Blogs from "../comps/Blogs";
import Header from "../comps/Header";
import HomePage from "../comps/Homepage";
import Profile from "../comps/Profile";
import { selectSignedIn } from "../store/userSlice";
import styles from "../styles/default.module.css";

const Blog = () => {
  const isSignedIn = useSelector(selectSignedIn);
  return (
    <div className={styles.wrapper}>
      <Header />
      <HomePage />
      {isSignedIn && <Blogs />}
      {isSignedIn && <Profile/>}
    </div>
  );
};

export default Blog;
