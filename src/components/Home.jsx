import styles from "./Home.module.css";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";

const Home = (props) => {
  return (
    <main className={styles.container}>
      <ImgSlider />
      <Viewers />
    </main>
  );
};

export default Home;
