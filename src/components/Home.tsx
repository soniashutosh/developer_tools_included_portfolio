import { profile, resume } from "../assets";
import styles, { layout } from "../styles";
import { Button } from "./utils/Button";

export const Home = () => {
  return (
    <section
      id="home"
      className={`flex sm:flex-row flex-col ${layout.sectionReverse}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full sm:pt-20 pt-5">
          <h1 className="flex-1 font-poppins font-normal ss:text-[72px] text-[45px] text-white ss:leading-[100px] leading-[74px]">
            Hi! I am
            <br />
            <span className="text-gradient sm:text-[100px] text-[50px]">
              Sahil Singh
            </span>
          </h1>
        </div>
        <Button styles="sm:mt-10 mt-2" name="Download Resume" link={resume} />
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} my-0 relative`}>
        <img
          src={profile}
          alt="profile"
          className="w-[100%] h-[100%] relative z-[5] sm:border-0 border-b-[1px] border-b-[#3F3E45]"
        />
        <div className="absolute z-[0] w-[45%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] bottom-40 rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-40 blue__gradient" />
      </div>
    </section>
  );
};
