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
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserName,
  selectUserEmail,
  selectUserPhoto,
} from "../features/user/userSlice";

const Header = (props) => {
  const handleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <nav className={styles.header}>
      <a href="/" className={styles.headerLogo}>
        <img src={logo} className={styles.headerLogoImage} alt="Disney+" />
      </a>

      <div className={styles.navMenu}>
        <a href="/home" className={styles.navMenuLink}>
          <img src={homeIcon} className={styles.navMenuImages} alt="HOME" />
          <span>HOME</span>
        </a>

        <a href="/" className={styles.navMenuLink}>
          <img src={searchIcon} className={styles.navMenuImages} alt="SEARCH" />
          <span>SEARCH</span>
        </a>

        <a href="/" className={styles.navMenuLink}>
          <img
            src={watchlistIcon}
            className={styles.navMenuImages}
            alt="WATCHLIST"
          />
          <span>WATCHLIST</span>
        </a>

        <a href="/" className={styles.navMenuLink}>
          <img
            src={orignalIcon}
            className={styles.navMenuImages}
            alt="ORIGNALS"
          />
          <span>ORIGNALS</span>
        </a>

        <a href="/" className={styles.navMenuLink}>
          <img src={movieIcon} className={styles.navMenuImages} alt="MOVIES" />
          <span>MOVIES</span>
        </a>

        <a href="/" className={styles.navMenuLink}>
          <img src={seriesIcon} className={styles.navMenuImages} alt="SERIES" />
          <span>SERIES</span>
        </a>
      </div>
      <a onClick={handleAuth} className={styles.login}>
        login
      </a>
    </nav>
  );
};

export default Header;
