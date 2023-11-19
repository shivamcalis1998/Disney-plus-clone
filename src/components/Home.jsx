import styles from "./Home.module.css";
import ImgSlider from "./ImgSlider";
import Recommands from "./Recommands";
import Viewers from "./Viewers";

const Home = (props) => {
  return (
    <main className={styles.container}>
      <ImgSlider />
      <Viewers />
      <Recommands />
    </main>
  );
};

export default Home;
