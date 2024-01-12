import { Link } from 'components/ui/Link'
import HeroImage from 'images/hero-burger.png'
import styles from './Main.module.css'

const Main = () => (
  <div className={styles.root}>
    <div className={styles.hero}>
      <img
        className={styles.heroImage}
        src={HeroImage}
        alt='A mouthwatering burger with space-themed ingredients suspended in the air.'
      />
      <div className={styles.heroContent}>
        <h1 className={`${styles.pageTitle} text text_type_main-large`}>
          Welcome to Stellar Burgers!
        </h1>
        <p className={`${styles.heroText} text text_type_main-default`}>
          Proudly serving since the dawn of intergalactic time.
          3.14-Star Michel-infinity Restaurant.
          Quantum Nom-Nom Award Laureate for Interstellar Excellence in&nbsp;Flavor Exploration.
        </p>
        <p className={`${styles.heroText} text text_type_main-default`}>
          Join&nbsp;us on&nbsp;a&nbsp;cosmic culinary adventure&nbsp;&mdash; where every bite is&nbsp;a&nbsp;journey to&nbsp;the stars!
        </p>
        <Link
          href="/login"
          view="secondary"
          size="medium"
        >
          Warp to Your Account
        </Link>
      </div>
    </div>
  </div>
)

export default Main
