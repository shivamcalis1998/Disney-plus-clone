import styles from "./Header.module.css";
import logo from "../images/logo.svg";
import homeIcon from "../images/home-icon.svg";
import searchIcon from "../images/search-icon.svg";
import watchlistIcon from "../images/watchlist-icon.svg";
import orignalIcon from "../images/original-icon.svg";
import movieIcon from "../images/movie-icon.svg";
import seriesIcon from "../images/series-icon.svg";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  selectUserName,
  selectUserPhoto,
  setSignOutState,
  setUserLoginDetails,
} from "../features/user/userSlice";

const Header = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        navigate("/home");
      }
    });
  }, [username]);

  const handleAuth = async () => {
    try {
      if (!username) {
        const result = await signInWithPopup(auth, provider);
        setUser(result.user);
        console.log(result);
      } else {
        await auth.signOut();
        dispatch(setSignOutState());
        navigate("/");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <nav className={styles.header}>
      <a href="/" className={styles.headerLogo}>
        <img src={logo} className={styles.headerLogoImage} alt="Disney+" />
      </a>
      {!username ? (
        <a onClick={handleAuth} className={styles.login}>
          login
        </a>
      ) : (
        <>
          <div className={styles.navMenu}>
            <a href="/home" className={styles.navMenuLink}>
              <img src={homeIcon} className={styles.navMenuImages} alt="HOME" />
              <span>HOME</span>
            </a>

            <a className={styles.navMenuLink}>
              <img
                src={searchIcon}
                className={styles.navMenuImages}
                alt="SEARCH"
              />
              <span>SEARCH</span>
            </a>

            <a className={styles.navMenuLink}>
              <img
                src={watchlistIcon}
                className={styles.navMenuImages}
                alt="WATCHLIST"
              />
              <span>WATCHLIST</span>
            </a>

            <a className={styles.navMenuLink}>
              <img
                src={orignalIcon}
                className={styles.navMenuImages}
                alt="ORIGNALS"
              />
              <span>ORIGNALS</span>
            </a>

            <a className={styles.navMenuLink}>
              <img
                src={movieIcon}
                className={styles.navMenuImages}
                alt="MOVIES"
              />
              <span>MOVIES</span>
            </a>

            <a className={styles.navMenuLink}>
              <img
                src={seriesIcon}
                className={styles.navMenuImages}
                alt="SERIES"
              />
              <span>SERIES</span>
            </a>
          </div>
          <div className={styles.signOut}>
            <img className={styles.userImg} src={userPhoto} alt={username} />
            <div className={styles.dropDown}>
              <span onClick={handleAuth}>Sign Out</span>
            </div>
          </div>
        </>
      )}
      {/* <a onClick={handleAuth} className={styles.login}>
        login
      </a> */}
    </nav>
  );
};

export default Header;
