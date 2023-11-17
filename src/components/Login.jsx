// import styled from "styled-components";
import styles from "./Login.module.css";
import ctaLogoOne from "../images/cta-logo-one.svg";
import ctaLogoTwo from "../images/cta-logo-two.png";

const Login = (props) => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.CTA}>
          <img src={ctaLogoOne} alt="ctalogo" className={styles.ctaLogoOne} />
          <a href={"/"} className={styles.signup}>
            GET ALL THERE
          </a>
          <p className={styles.descreption}>
            Get Premier Access to Raya and the Last Dragon for additional fee
            with a Disney+ Subscription. As of 03/26/21, the price of Disney+
            and the Disney Bundle will increase by 1$.
          </p>
          <img src={ctaLogoTwo} alt="ctalogo" className={styles.ctaLogoTwo} />
        </div>
        <div className={styles.bgImage}></div>
      </div>
    </section>
  );
};

// const Container = styled.section`
//   overflow: hidden;`
//   display: flex;

// `;

export default Login;
