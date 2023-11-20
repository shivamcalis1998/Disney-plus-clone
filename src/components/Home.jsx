import styles from "./Home.module.css";
import ImgSlider from "./ImgSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommends from "./Recommends";
import Viewers from "./Viewers";
import Trending from "./Trending";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";
import { onSnapshot, collection } from "firebase/firestore";

const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await onSnapshot(
          collection(db, "movies"),
          (querySnapshot) => {
            let recommends = [];
            let newDisneys = [];
            let originals = [];
            let trendings = [];

            querySnapshot.forEach((doc) => {
              switch (doc.data().type) {
                case "recommend":
                  recommends.push({ id: doc.id, ...doc.data() });
                  break;

                case "new":
                  newDisneys.push({ id: doc.id, ...doc.data() });
                  break;

                case "original":
                  originals.push({ id: doc.id, ...doc.data() });
                  break;

                case "trending":
                  trendings.push({ id: doc.id, ...doc.data() });
                  break;

                default:
                  break;
              }
            });

            dispatch(
              setMovies({
                recommend: recommends,
                newDisney: newDisneys,
                original: originals,
                trending: trendings,
              })
            );
          }
        );

        // Clean up the subscription when the component unmounts
        return () => {
          snapshot();
        };
      } catch (error) {
        console.error("Error fetching data from Firestore:", error);
      }
    };

    fetchData();
  }, [userName, dispatch]);

  return (
    <main className={styles.container}>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </main>
  );
};

export default Home;
