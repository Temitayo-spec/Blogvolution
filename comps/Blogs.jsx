/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable arrow-body-style */
// eslint-disable-next-line arrow-body-style
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/blogs.module.css";
import {
  selectSection,
  selectUserInput,
  setBlogData,
} from "../store/userSlice";

const Blogs = () => {
  const section = useSelector(selectSection);
  const searchInput = useSelector(selectUserInput);
  // eslint-disable-next-line camelcase
  const blog_url = `https://gnews.io/api/v4/search?q=${searchInput}&token=c2cfd2b5003d2dbbf7daafef3794a347`;
  const dispatch = useDispatch();
  const [blogs, setBlogs] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(blog_url)
      .then((res) => {
        dispatch(setBlogData(res.data));
        setBlogs(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchInput]);
  if (section === false) {
    return (
      <div className={styles.blog_wrapper}>
        <div className={styles.blog_header}>
          {" "}
          {loading ? (
            <div className={styles.loader}>
              <h1>Loading...</h1>
            </div>
          ) : (
            ""
          )}
          <h1 className={styles.heading}>Blogs</h1>
          <div className={styles.content}>
            {blogs?.articles.map((blog) => (
              <a
                href={blog.url}
                target="_blank"
                className={styles.blog_card}
                rel="noreferrer"
              >
                <div className={styles.blog_card_img}>
                  <img src={blog.image} alt="blog" />
                </div>
                <div className={styles.blog_card_content}>
                  <h3>
                    <span>{blog.source.name}</span>
                    <span>{blog.publishedAt}</span>
                  </h3>
                  <h1>{blog.title}</h1>
                  <p>{blog.description}</p>
                </div>
              </a>
            ))}
          </div>
          {blogs?.totalArticles === 0 && (
            <h1 className={styles.no_blogs}>
              No blogs available. Search something else to read on the platform
            </h1>
          )}
        </div>
      </div>
    );
  }
  return null;
};

export default Blogs;
