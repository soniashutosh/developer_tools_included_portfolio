import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Project } from "./components/Project";
import { Skills } from "./components/Skills";
import styles from "./styles";

function App() {
  return (
    <>
      <div className="bg-dark-primary w-full overflow-hidden sm:pt-4 pt-0">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
      </div>

      <div
        className={`bg-dark-primary sm:pt-8 pt-0 sm:pb-36 pb-0 ${styles.flexStart}`}
      >
        <div className={`${styles.boxWidth}`}>
          <Home />
        </div>
      </div>

      <div className={`bg-dark-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} pt-4`}>
          <About />
          <Education />
          <Skills />
          <Project />
          <Contact />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
